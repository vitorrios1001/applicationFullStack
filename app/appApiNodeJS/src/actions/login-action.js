import axios from 'axios';

const REQUEST_URL = 'http://apinodejsvr.herokuapp.com/';

export const fetchLogin = () => {

    const request = axios.get(`${REQUEST_URL}/orders`);
        
    return {
        type: 'FETCH_LOGIN',
        payload: request
    };   
};