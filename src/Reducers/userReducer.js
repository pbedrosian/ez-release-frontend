const userReducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case "LOAD_USERS":
            return {
                state
            }
        default: 
            return state;
    }
}

export default userReducer