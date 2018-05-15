const INITIAL_STATE = {
    logged: false,
    token:''
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'LOGGED':
            return { ...state, logged: true }
        case 'AUTHENTICATE':
            return { ...state, token: action.payload.data.token}    
        default:
            return state;    
    }
}

