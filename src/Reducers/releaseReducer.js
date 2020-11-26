const releaseReducer = (state = [], action) => {
    switch (action.type) {
        case "LOAD_RELEASES":
            return action.releases
        case "ADD_RELEASE":
            return  state = [...state, action.payload]
        case "UPDATE_RELEASE":
            let releaseIndex = state.find(r => r.id === action.payload.id).id
            let newState = [...state]
            newState[releaseIndex] = action.payload
            return state = [...newState]
        default:
            return state;
    }
}

export default releaseReducer