'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');
const md5 = require('md5');

const authService = require('../services/auth-service');
const emailService = require('../services/email-service');

exports.post = async(req,res,next) => {

    let contract = new ValidationContract();

    contract.hasMinLen(req.body.name, 3, 'O nome de usuário deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'Deve ser o email válido');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter no minimo 6 caracteres');


    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            roles: ["user"]
        });

        emailService
            .send(req.body.email,
            'Seja Bem Vindo', 
            global.EMAIL_TMPL.replace('{0}', req.body.name));

        res.status(201).send({
            message: 'Usuário cadastrado com sucesso!'
        });
    }catch(e){
        res.status(500).send({
            message: 'Ocorreu um erro ao salvar o usuário'
        });
    }
};

exports.authenticate = async(req,res,next) => {

    try{
        const customer = await repository.authenticate({        
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        if(!customer){
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
        }
        
        const token = await authService.generateToken({
            id: customer._id,
            email: customer.email, 
            name: customer.name,
            roles: customer.roles
        });

        res.status(201).send({
            token: token,
            data: {
                email: customer.email, 
                name: customer.name
            }
        });
    }catch(e){
        res.status(401).send({
            message: 'Acesso negado'
        });
    }
};

exports.refreshToken = async(req,res,next) => {

    try{
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        const customer = await repository.getById(data.id);

        if(!customer){
            res.status(404).send({
                message: 'Cliente nao encontrado'
            });
        }
        
        const tokenData = await authService.generateToken({
            id: customer._id,
            email: customer.email, 
            name: customer.name,
            roles: customer.roles
        });

        res.status(201).send({
            token: token,
            data: {
                email: customer.email, 
                name: customer.name
            }
        });
    }catch(e){
        res.status(401).send({
            message: 'Acesso negado'
        });
    }
};



