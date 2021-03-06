const filterReducer = (state='', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      state = action.filter
      return action.filter
    default:
      return state
  }
}

export const filterChange = filter => {
  return {
    type: 'SET_FILTER',
    filter,
  }
}

export default filterReducer