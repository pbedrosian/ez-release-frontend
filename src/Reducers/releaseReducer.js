const releaseReducer = (state = [], action) => {
    switch (action.type) {
        case "LOAD_RELEASES":
            return action.releases
        case "ADD_RELEASE":
            return  state = [...state, action.payload]
        default:
            return state;
    }
}

export default releaseReducer