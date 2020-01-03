const deleteBlockReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DELETE_BLOCK':
            return action.payload;
        default:
            return state;
    }
}
export default deleteBlockReducer;