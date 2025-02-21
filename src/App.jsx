import { useState } from 'react'
import CounterApp from './components/CounterApp'



function App() {
  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount(count+1)
  }

  const decrement = () =>{
    setCount(count > 0 ? count-1 :count)
  }

  return (
    <div className='flex justify-center items-center mx-auto  h-screen '>
      
      
      <div className="card">
        <CounterApp increment={increment} decrement={decrement} count={count}/>
      </div>
     
    </div>
  )
}

export default App
