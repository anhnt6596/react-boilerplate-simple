const initialState = {
    isLoginLoading: false,
    a: 1,
};

const appReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'LOGIN_REQUEST': {
            return { ...state, isLoginLoading: true };
        }
        default:
            return state;
    }
};

export default appReducer;
