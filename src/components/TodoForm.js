import React, { useContext, useState } from 'react'
import { DemoContext } from '../context/demoContext'

const TodoForm = () => {
  const { user, dispatch } = useContext(DemoContext)
  const [inputValue, setInputValue] = useState('')
  const btnAddTodo = (e) => {
    e.preventDefault()
    dispatch({ type: 'add_todo', user, todo: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={btnAddTodo}>
      <input
        type="text"
        placeholder="請輸入要新增的事項"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        required
      />
      <input type="submit" value="Add" />
    </form>
  )
}

export default TodoForm
