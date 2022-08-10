import { useImmerReducer } from 'use-immer'
import React, { useReducer } from 'react'

const UseImmerReducer = () => {
  // useImmerReducer
  const initState = {
    name: 'Yuan',
    detail: {
      count: 0,
    },
  }
  const reducer = (draft, action) => {
    switch (action.type) {
      case 'add':
        draft.detail.count++
        return draft
      case 'reset':
        return initState
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initState)

  // useReducer
  const initStateBase = {
    name: 'Yuan',
    detail: {
      count: 0,
    },
  }
  const reducerBase = (state, action) => {
    switch (action.type) {
      case 'add':
        return {
          ...state,
          detail: {
            ...state.detail,
            count: state.detail.count + 1,
          },
        }
      case 'reset':
        return initStateBase
    }
  }

  const [stateBase, dispatchBase] = useReducer(reducerBase, initStateBase)

  return (
    <>
    <div style={{ padding: '0px 15px' }}>
      <h2>使用useReducer</h2>
      <p>{JSON.stringify(stateBase)}</p>
      <button onClick={() => { dispatchBase({ type: 'add' }) }}>add</button>
      <button onClick={() => { dispatchBase({ type: 'reset' }) }} style={{ margin: '0px 5px' }}>reset</button>

      <h2>使用useImmerReducer</h2>
      <p>{JSON.stringify(state)}</p>
      <button onClick={() => { dispatch({ type: 'add' }) }}>add</button>
      <button onClick={() => { dispatch({ type: 'reset' }) }} style={{ margin: '0px 5px' }}>reset</button>
    </div>
    </>
  )
}

export default UseImmerReducer
