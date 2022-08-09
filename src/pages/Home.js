import { DemoContext } from '../context/demoContext'
import React, { useContext } from 'react'

const Home = () => {
  const { user, btnChangeUser } = useContext(DemoContext)

  return (
    <>
    <div style={{ padding: '0px 15px' }}>
      <p>name：{user}</p>
      <button onClick={btnChangeUser}>切換</button>
    </div>
    </>
  )
}

export default Home
