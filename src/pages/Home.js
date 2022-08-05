import { DemoContext } from '../context/demoContext'
import React, { useContext } from 'react'

const Home = () => {
  const demo = useContext(DemoContext)
  return (
    <>
      Hi~ {demo.name}, your number is {demo.number}.
    </>
  )
}

export default Home
