import React, { useContext, useState } from 'react'
import { DemoContext } from '../context/demoContext'

// TODO: 熟悉useReducer -> useImmerReducer
const TodoList = () => {
  const { user, allTodoList, addTodoList } = useContext(DemoContext)
  const [inputValue, setInputValue] = useState('')
  const userList = allTodoList[user]

  return (
    <>
    <div style={{ padding: '0px 15px' }}>
      <p>{user} 的 todo list</p>
      <input
        type="text"
        placeholder='請輸入要新增的事項'
        value={inputValue}
        onChange={
          (e) => { setInputValue(e.target.value) }
        }
      />
      <button onClick={() => addTodoList(user, inputValue)}>新增</button>

      <h4>todo：{userList.todo.map((todo, index) => <li key={index}>{todo}</li>)}</h4>
      <h4>done：{userList.done.map((done, index) => <li key={index}>{done}</li>)}</h4>
    </div>
    </>
  )
}

export default TodoList
