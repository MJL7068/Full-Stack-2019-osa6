const initialState = null

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
    console.log(state)
      state = action.data.content
      return action.data.content
    default:
      return state
  }
}

export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        content: content
      }
    })

    setTimeout(() => {
        dispatch({
            type: 'SET_NOTIFICATION',
            data: {
              content: null
            }
          })
    }, time)
  }
}

export default notificationReducer