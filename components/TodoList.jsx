import React from 'react'
import { useEffect, useState, createContext } from 'react'
import Category from './Category'
import './TodoList.css'

const TodoList = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [cate, setCate] = useState('')
  const [todoArray, setTodoArray] = useState([
    {
      id: 1,
      title: 'title 1',
      description: 'description 1',
      category: 'Academics',
      status: false,
    },
    {
      id: 2,
      title: 'title 2',
      description: 'description 2',
      category: 'Personal',
      status: false,
    },
  ])

  const addTodo = async (e) => {
    e.preventDefault()
    const todoObj = {
      id: todoArray.length + 1,
      title: title,
      description: desc,
      category: cate,
      status: false,
    }
    setTodoArray([...todoArray, todoObj])
  }

  const addTitle = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
  }

  const addDesc = (e) => {
    e.preventDefault()
    setDesc(e.target.value)
  }

  const addCate = (e) => {
    e.preventDefault()
    setCate(e.target.value)
  }
  return (
    <div className='container'>
      <div className='add__todo'>
        Create New Task
        <div className='take__input'>
          <div className='real__input'>
            Title
            <input id='title' type='text' value={title} onChange={addTitle} />
          </div>
          <div className='real__input'>
            Description
            <input type='text' id='desc' value={desc} onChange={addDesc} />
          </div>
          <div className='real__input'>
            Catergory
            <input type='text' id='category' value={cate} onChange={addCate} />
          </div>
        </div>
        <div className='add__button'>
          <button className='add' onClick={addTodo}>
            Add Todo
          </button>
        </div>
      </div>
      <div className='todo__list'>
        <Category todoArray={todoArray} />
      </div>
    </div>
  )
}

export default TodoList
