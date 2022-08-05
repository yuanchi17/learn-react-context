import React, { useContext } from 'react'
import { DemoContext } from '../context/demoContext'

const TodoList = () => {
  const { user } = useContext(DemoContext)
  return (
    <>
      {user.name} 的 todo list
    </>
  )
}

export default TodoList
