import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import DemoContextProvider from './context/demoContext'
import Header from './components/Header'
import Home from './pages/Home'
import React from 'react'
import TodoList from './pages/TodoList'
import UseImmer from './pages/UseImmer'
import UseImmerReducer from './pages/UseImmerReducer'

// https://reactrouter.com/docs/en/v6/hooks/use-routes
const AllRouters = () => useRoutes([
  { path: '/', element: <Home /> },
  { path: '/todo-list', element: <TodoList /> },
  { path: '/use-immer', element: <UseImmer /> },
  { path: '/use-immer-reducer', element: <UseImmerReducer /> },
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
