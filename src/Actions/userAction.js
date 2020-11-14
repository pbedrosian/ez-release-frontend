export const fetchUsers = () => {
    return (dispatch) => {
      fetch('http://localhost:3000/users').then(response => {
        return response.json()
      }).then(users => {
        dispatch({ type: 'LOAD_USERS', users })
      })
    }
  }