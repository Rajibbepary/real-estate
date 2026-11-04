'use client'

import React, { useState } from 'react'

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(0)
  
  const Increment = () => {
    setCount((pre=>pre + 1))
  }

  const Decrement = () => {
    setCount((pre=> Math.max(0, pre - 1)))
  }

  const Reset = () => {
    setCount(0)
  }

  return (
    <div className='text-green-600 '>Counter App
      <p className='text-2xl'>Count: {count}</p>
      <button className='bg-blue-500 text-white px-2 py-2 rounded' onClick={Increment} >
        Increment
      </button>
      <button className='bg-blue-500 ml-3 text-white px-2 py-2 rounded' onClick={Decrement} >
        Decrement
      </button>
       <button className='bg-blue-500 ml-3 text-white px-2 py-2 rounded' onClick={Reset} >
        Reset
      </button>
    </div>
  
  )
}
    

export default page