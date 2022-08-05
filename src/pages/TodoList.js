import React, { useContext } from 'react'
import { DemoContext } from '../context/demoContext'

const TodoList = () => {
  const { user, allTodoList } = useContext(DemoContext)
  const userList = allTodoList.find(a => a.id === user.name)
  return (
    <>
      <p>{user.name} 的 todo list</p>

      <h4>todo：{userList.todo.map((todo, index) => <li key={index}>{todo}</li>)}</h4>
      <h4>done：{userList.done.map((done, index) => <li key={index}>{done}</li>)}</h4>
    </>
  )
}

export default TodoList
