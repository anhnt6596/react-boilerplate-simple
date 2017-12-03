const initialState = {
    count: 0,
};

const appReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'INCREASE': {
            return { ...state, count: state.count + 1 };
        }
        default:
            return state;
    }
};

export default appReducer;
