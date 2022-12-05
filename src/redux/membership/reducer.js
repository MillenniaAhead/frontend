const initialState = {
    info : [],
    payload: null
}
console.log(initialState);

const membershipReducer = (state = initialState, action) => {
    switch(action.type){
        case "MEMBERSHIP_REGISTER":
            return{
                ...state,
                info : action.payload
            }
        default :
        return state;
    }
}
export default membershipReducer