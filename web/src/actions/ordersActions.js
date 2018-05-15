import axios from 'axios'

export default function fetchOrders(){
    const req = axios.get('http://apinodejsvr.herokuapp.com/orders/');

    return {
        type: 'FETCH_ORDERS',
        payload: req
    }

}
