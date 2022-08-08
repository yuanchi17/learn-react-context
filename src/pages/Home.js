import { DemoContext } from '../context/demoContext'
import React, { useContext } from 'react'

const Home = () => {
  const { user, setUser } = useContext(DemoContext)
  const btnChange = () => {
    setUser({
      ...user,
      name: user.name === 'name-A' ? 'name-B' : 'name-A',
    })
  }
  return (
    <>
    <div style={{ padding: '0px 15px' }}>
      <p>name：{user.name}</p>
      <p>number：{user.number}</p>
      <button onClick={btnChange}>切換</button>
    </div>
    </>
  )
}

export default Home
