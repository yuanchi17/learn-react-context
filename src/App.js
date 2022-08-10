import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import DemoContextProvider from './context/demoContext'
import Header from './components/Header'
import Home from './pages/Home'
import React from 'react'
import TodoList from './pages/TodoList'
import UseImmer from './pages/UseImmer'

// https://reactrouter.com/docs/en/v6/hooks/use-routes
const AllRouters = () => useRoutes([
  { path: '/', element: <Home /> },
  { path: '/todo-list', element: <TodoList /> },
  { path: '/use-immer', element: <UseImmer /> },
])

function App () {
  return (
    <BrowserRouter>
      <Header />
      <DemoContextProvider>
        <AllRouters />
      </DemoContextProvider>
    </BrowserRouter>
  )
}

export default App
