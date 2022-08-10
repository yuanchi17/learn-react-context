import React, { useContext } from 'react'
import TodoForm from '../components/TodoForm'
import { DemoContext } from '../context/demoContext'

// TODO: 熟悉useReducer -> useImmerReducer
const TodoList = () => {
  const { user, allTodoList } = useContext(DemoContext)
  const userList = allTodoList[user]

  return (
    <div style={{ padding: '0px 15px' }}>
      <TodoForm />
      <h4>todo：{userList.todo.map((todo, index) => <li key={index}>{todo}</li>)}</h4>
      <h4>done：{userList.done.map((done, index) => <li key={index}>{done}</li>)}</h4>
    </div>
  )
}

export default TodoList
