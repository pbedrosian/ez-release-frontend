const releaseReducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case "LOAD_RELEASES":
            return action.releases
        default:
            return state;
    }
}

export default releaseReducer