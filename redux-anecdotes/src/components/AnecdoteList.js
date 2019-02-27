import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const { anecdotes, notifications } = props.store.getState()
  
    const vote = (id, content) => {
      props.store.dispatch(addVote(id))

      props.store.dispatch(setNotification(`you voted '${content}'`))
      setTimeout(() => {
        props.store.dispatch(setNotification(null))
      }, 5000)
    }
    
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
}

export default AnecdoteList