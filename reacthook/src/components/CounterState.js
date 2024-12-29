import React,{useState} from 'react'

function CounterState() {
    const [count,setCount]=useState(0)

  return (
    <div>CounterState {count}
       <button onClick={()=> setCount(count+1)}>
        increment
       </button>
    </div>
  )
}

export default CounterState