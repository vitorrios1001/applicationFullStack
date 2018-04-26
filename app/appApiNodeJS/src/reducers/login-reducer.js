const INITIAL_STATE = {
    token: ''
};

export default ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_LOGIN':            
            return { ...state, token: action.payload.data }; 
        default:
            return state;    
    }
};