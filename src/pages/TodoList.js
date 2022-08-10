import React, { useContext, useState } from 'react'
import { DemoContext } from '../context/demoContext'

// TODO: 熟悉useReducer -> useImmerReducer
const TodoList = () => {
  const { user, allTodoList, dispatch } = useContext(DemoContext)
  const [inputValue, setInputValue] = useState('')
  const userList = allTodoList[user]
  const btnAddTodo = async (e) => {
    e.preventDefault()
    console.log('btnAddTodo')
    await dispatch({ type: 'add_todo', user, todo: inputValue })
    console.log('after dispatch')
    setInputValue('')
  }

  return (
    <div style={{ padding: '0px 15px' }}>
      <form onSubmit={btnAddTodo}>
        <input
          type="text"
          placeholder="請輸入要新增的事項"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          required
        />
        <input type="submit" value="todo-list" />
      </form>
      <h4>todo：{userList.todo.map((todo, index) => <li key={index}>{todo}</li>)}</h4>
      <h4>done：{userList.done.map((done, index) => <li key={index}>{done}</li>)}</h4>
    </div>
  )
}

export default TodoList
