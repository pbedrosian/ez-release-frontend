export const fetchReleases = () => {
    return (dispatch) => {
      fetch('http://localhost:3000/releases').then(response => {
        return response.json()
      }).then(releases => {
        dispatch({ type: 'LOAD_RELEASES', releases })
      })
    }
  }