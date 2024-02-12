import React from 'react'
import './Todo.css'

const Todo = (props) => {
  return (
    <div className='Todo'>
      <div className='title'>{props.title}</div>
      <div className='description'>
        <p>{props.description}</p>
      </div>
      <div className='buttons'>
        <button
          className='delete__button btn'
          onClick={() => {
            props.deleteTask(props.id)
          }}
        >
          Delete
        </button>
        {props.status && (
          <button
            className='Incomplete__button btn'
            onClick={() => {
              props.incomplete(props.id)
            }}
          >
            Mark as Incomplete
          </button>
        )}
        {!props.status && (
          <button
            className='Done__button btn'
            onClick={() => {
              props.done(props.id)
            }}
          >
            Mark as Complete
          </button>
        )}
      </div>
    </div>
  )
}

export default Todo
