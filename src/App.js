import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { DemoContext } from './context/demoContext'
import Header from './components/Header'
import Home from './pages/Home'
import React, { useState } from 'react'
import TodoList from './pages/TodoList'

// https://reactrouter.com/docs/en/v6/hooks/use-routes
const AllRouters = () => useRoutes([
  { path: '/', element: <Home /> },
  { path: '/todo-list', element: <TodoList /> },
])

function App () {
  const [user, setUser] = useState({
    name: 'name-default',
    number: 17,
  })
  return (
    <BrowserRouter>
      <DemoContext.Provider value={{ user, setUser }}>
        <Header />
        <AllRouters />
      </DemoContext.Provider>
    </BrowserRouter>
  )
}

export default App
