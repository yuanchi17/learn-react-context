import React, { createContext, useState } from 'react'

export const DemoContext = createContext(undefined)
DemoContext.displayName = 'demo-context'

const DemoContextProvider = props => {
  // init fake data
  const [user, setUser] = useState('name-default')
  const btnChangeUser = () => {
    setUser(user === 'name-A' ? 'name-B' : 'name-A')
  }

  const [allTodoList, setAllTodoList] = useState({
    'name-default': {
      todo: ['eat'],
      done: ['run', 'write', 'learn'],
    },
    'name-A': {
      todo: ['eat', 'write'],
      done: ['run', 'learn'],
    },
    'name-B': {
      todo: ['learn'],
      done: ['run', 'write'],
    },
  })

  const addTodoList = (user, todo) => {
    const userList = allTodoList[user]
    console.log(userList)
    allTodoList[user] = {
      ...userList,
      todo: [...userList.todo, todo],
    }
    setAllTodoList({ ...allTodoList })
  }

  return (
    <DemoContext.Provider value={{
      addTodoList,
      allTodoList,
      btnChangeUser,
      user,
    }}>
      {props.children}
    </DemoContext.Provider>
  )
}

export default DemoContextProvider
