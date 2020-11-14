const releaseReducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case "LOAD_RELEASES":
            return {
                ...state, releases: action.releases
            }
        default:
            return state;
    }
}

export default releaseReducer