export const initialState = {
    firstName : '',
    lastName : '',
    email : '',
    error: {}
};

export function formReducer(state, action) {
    switch(action.type){
        case 'SET_FIELD':
            return{
                ...state,
                [action.field]: action.value
            };
        case 'SET_ERROR':
            return{
                ...state,
                error: {...state.error, [action.field]: action.error}
            };
        case 'RESET':
            return initialState;
        default:
            throw new Error("Unknown Action");
    }
}