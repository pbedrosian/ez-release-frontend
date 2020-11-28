const releaseReducer = (state = [], action) => {
    switch (action.type) {
        case "LOAD_RELEASES":
            return action.releases
        case "ADD_RELEASE":
            return  state = [...state, action.payload]
        case "UPDATE_RELEASE":
            let index = (release) => release.id === action.payload.id
            let newState = [...state]
            newState[index] = action.payload
            return state = [...newState]
        default:
            return state;
    }
}

export default releaseReducer