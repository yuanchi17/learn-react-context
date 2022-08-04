import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import React from 'react'
import TodoList from './pages/TodoList'

function App () {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/todo-list'>Todo List</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo-list" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
