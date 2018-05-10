const INITIAL_STATE = {
    all: []
}

export default ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return { ...state, all: action.payload.data }
        default:
            return state    
    }
}

