import React, { useEffect, useState } from 'react'
import SingleCategory from './SingleCategory'
import './Category.css'

const Category = (props) => {
  const [name, setName] = useState('')
  const [categoryArray, setCategoryArray] = useState([
    {
      id: 1,
      name: 'Academics',
    },
    {
      id: 2,
      name: 'Personal',
    },
  ])

  const addCatName = (e) => {
    setName(e.target.value)
  }

  const addCategory = (e) => {
    e.preventDefault()
    const catObject = {
      id: categoryArray.length + 1,
      name: name,
    }
    setCategoryArray([...categoryArray, catObject])
  }

  const todoArray = props.todoArray

  return (
    <div className='my__categories'>
      <div className='add__category'>
        <input type='text' onChange={addCatName} />
        <button onClick={addCategory}>Add Category</button>
      </div>
      <div className='all__categories'>
        {categoryArray.map((item) => (
          <SingleCategory
            key={item.id}
            name={item.name}
            categoryArray={categoryArray}
            todoArray={todoArray}
          />
        ))}
      </div>
    </div>
  )
}

export default Category
