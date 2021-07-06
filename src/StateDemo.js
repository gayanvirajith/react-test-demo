import React, { useState, useEffect } from 'react'

const countInitial = () => {
  return 4
}

function StateDemo() {
  // const [count, setCount] = useState(countInitial()) // not good! it invokes every time when state change
  const [count, setCount] = useState(countInitial) // correct way
  useEffect(() => {
    return () => {}
  }, [count])
  function incrementCount() {
    setCount((previousValue) => {
      return previousValue + 1
    })
  }

  function decrementCount() {
    setCount((previousCount) => {
      return previousCount - 1
    })
  }

  return (
    <div>
      <button className="increment" onClick={incrementCount}>
        Inc
      </button>
      {count}
      <button className="decrement" onClick={decrementCount}>
        Dec
      </button>
    </div>
  )
}

export default StateDemo
