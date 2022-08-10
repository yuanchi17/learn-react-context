import { demoReducer } from '../reducer/demoReducer'
import React, { createContext, useReducer, useState } from 'react'

export const DemoContext = createContext(undefined)
DemoContext.displayName = 'demo-context'

const DemoContextProvider = props => {
  // init fake data
  const [user, setUser] = useState('name-default')
  const btnChangeUser = () => {
    setUser(user === 'name-A' ? 'name-B' : 'name-A')
  }

  const [allTodoList, dispatch] = useReducer(demoReducer, {
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
  return (
    <DemoContext.Provider value={{
      allTodoList,
      btnChangeUser,
      dispatch,
      user,
    }}>
      {props.children}
    </DemoContext.Provider>
  )
}

export default DemoContextProvider
