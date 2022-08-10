import { useImmer } from 'use-immer'
import React, { useState } from 'react'

const UseImmer = () => {
  const [user, setUser] = useState({
    name: 'Yuan',
    detail: {
      color: 'blue',
      country: 'Taiwan',
    },
  })

  const [userImmer, updateUserImmer] = useImmer({
    name: 'Yuan',
    detail: {
      color: 'blue',
      country: 'Taiwan',
    },
  })

  return (
    <>
    <div style={{ padding: '0px 15px' }}>
      <h2>使用 useState</h2>
      <p>name：{JSON.stringify(user)}</p>
      <p>onClick: {'setUser({ ...user, detail: { ...user.detail, color: \'red\' } })'}</p>
      <button onClick={() => setUser({ ...user, detail: { ...user.detail, color: 'red' } })}>Button-useState</button>

      <h2>使用 useImmer</h2>
      <p>name：{JSON.stringify(userImmer)}</p>
      <p>onClick: {'updateUserImmer(draft => { draft.detail.color = \'red\' })'}</p>
      <button onClick={() => { updateUserImmer(draft => { draft.detail.color = 'red' }) }}>Button-useImmer</button>
    </div>
    </>
  )
}

export default UseImmer
