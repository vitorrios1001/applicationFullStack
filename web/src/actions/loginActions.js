import axios from 'axios';

import URL_API from 'https://apinodejsvr.herokuapp.com/customers/authenticate';

export function authenticate(user) {

  const req = axios.post(
    URL_API,
    {
        email: user.email,
        password: user.password
    }).then(
        
    ).catch(

    )

    

}






