import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const vote = (id, content) => {
      props.addVote(id)

      props.setNotification(`you voted '${content}'`)
      setTimeout(() => {
        props.setNotification(null)
      }, 5000)
    }
    
    return (
      <div>
        <h2>Anecdotes</h2>
        {props.anecdotesToShow.map(anecdote =>
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

const anecdotesToShow = ({anecdotes, filter}) => {
  return anecdotes.filter(anecdote => 
  {
    return anecdote.content.toLowerCase().includes(filter.toLowerCase())
  }
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    anecdotesToShow: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  setNotification,
  addVote
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)