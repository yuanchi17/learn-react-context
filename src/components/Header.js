import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/todo-list'>Todo List</Link></li>
      <li><Link to='/use-immer'>UseImmer</Link></li>
    </ul>
  )
}

export default Header
