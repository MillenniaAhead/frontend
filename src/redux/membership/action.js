export const register = (membershipDetails) => {
    return (dispatch) => {
        dispatch({
            type: "MEMBERSHIP_REGISTER",
            payload:membershipDetails
        }); 
        
    }
}