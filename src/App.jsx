
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
 

  return (
    <div>
      <p>{count}</p>
      <button className="btn btn-accent btn-outline">{count}</button>
      <button onClick={()=>setCount(count + 1)} className="btn btn-primary">Button</button>

    </div>
  )
}

export default App
