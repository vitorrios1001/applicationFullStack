import axios from 'axios'

export default function fetchProducts(){
    const req = axios.get('http://apinodejsvr.herokuapp.com/products/');

    return {
        type: 'FETCH_PRODUCTS',
        payload: req
    }
}



