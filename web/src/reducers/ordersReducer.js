const INITIAL_STATE = {
    allOrders: []
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'FETCH_ORDERS':
            return { ...state, allOrders: action.payload.data }
        default:
            return state;    
    }
}

