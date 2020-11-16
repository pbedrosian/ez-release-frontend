export const fetchReleases = () => {
    return (dispatch) => {
      fetch('http://localhost:3000/releases').then(response => {
        return response.json()
      }).then(releases => {
        dispatch({ type: 'LOAD_RELEASES', releases })
      })
    }
  }

  export const addRelease = (release, history) => {
    return (dispatch) => {
      fetch('http://localhost:3000/releases', {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        },
        body: JSON.stringify(release)
      })
      .then(resp => resp.json())
      .then(newRelease => {
        dispatch({type: 'ADD_RELEASE', payload: newRelease })
        history.push(`/release-forms/${newRelease.id}`)
      })
    }
  }