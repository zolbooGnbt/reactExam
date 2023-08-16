import React, { useState } from 'react'
import './Exam.css';

const Count = () => {
  const [count, setCount] = useState(0);

  const CountClick = () => {
    setCount(count + 1);
  }

  return (
    <div  className='countContainer'>
      <div className='count'>  {count}</div>
      <button onClick={CountClick} className='button'>Click</button>
    </div>
  )
}

export default Count