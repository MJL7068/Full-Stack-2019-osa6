import React from 'react';

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const { anecdotes, notifications } = props.store.getState()

  return (
    <div style={style}>
      {notifications}
    </div>
  )
}

export default Notification
