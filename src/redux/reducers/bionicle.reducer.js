const bioniclesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_BIONICLES':
            console.log('Bionicles should be here', action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default bioniclesReducer;