const SET_USER_DATA = 'SET-USER-DATA'; 

let initialState = {
    userId: null,
    login: null,
    email: null

}; //my id 10914

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            return {
                ...state,
                ...action.data
            };
        
        default:
            return state;
    }
}


export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export default authReducer;