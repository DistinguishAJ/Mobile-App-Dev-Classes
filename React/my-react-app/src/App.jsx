import { useState } from "react"
import { Welcome } from "./Welcome"
import "./App.css"


function App() {
  
  const[count, setCount] = useState(0)

  function increase(){
    setCount(count + 1);
  }

  const decrease = ()=>{
    setCount(count - 1)
  }

  return (
    <div>
      <Welcome name="Jame"/>
      <h2>Counting: {count} </h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App
