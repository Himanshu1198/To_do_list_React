import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import './SingleCategory.css'

const SingleCategory = (props) => {
  const { todoArray, name } = props
  const [incompleteTask, setIncompleteTask] = useState([])
  const [completeTask, setCompleteTask] = useState([])

  useEffect(() => {
    const incompleteTasks = todoArray.filter(
      (item) => item.category === name && !item.status
    )
    const completeTasks = todoArray.filter(
      (item) => item.category === name && item.status
    )
    setIncompleteTask(incompleteTasks)
    setCompleteTask(completeTasks)
  }, [todoArray, name])

  const done = (id) => {
    const task = incompleteTask.find((item) => item.id === id)
    if (task) {
      task.status = true
      setIncompleteTask(incompleteTask.filter((item) => item.id !== id))
      setCompleteTask([...completeTask, task])
    }
  }

  const incomplete = (id) => {
    const task = completeTask.find((item) => item.id === id)
    if (task) {
      task.status = false
      setCompleteTask(completeTask.filter((item) => item.id !== id))
      setIncompleteTask([...incompleteTask, task])
    }
  }

  const deleteTask = (id) => {
    setIncompleteTask(incompleteTask.filter((item) => item.id !== id))
    setCompleteTask(completeTask.filter((item) => item.id !== id))
  }

  return (
    <div className='Single__Category'>
      <div className='category__title'>{name}</div>
      <div className='incomplete__tasks'>
        {incompleteTask.map((todoItem) => (
          <Todo
            {...todoItem}
            key={todoItem.id}
            done={done}
            incomplete={incomplete}
            deleteTask={deleteTask}
            status={false}
          />
        ))}
      </div>
      <div className='complete__tasks'>
        <div className='complete__tasks__title'>Completed Tasks</div>
        {completeTask.map((todoItem) => (
          <Todo
            {...todoItem}
            key={todoItem.id}
            done={done}
            incomplete={incomplete}
            deleteTask={deleteTask}
            status={true}
          />
        ))}
      </div>
    </div>
  )
}

export default SingleCategory
