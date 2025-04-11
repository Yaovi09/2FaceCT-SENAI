
import { useState } from 'react'
import './App.css'

function App() {
 const [inputN1, setinputN1] = useState("");
 const [inputN2, setinputN2] = useState("");
 const [resultado, setresultado] = useState("");

 const somar =()=>{
  setresultado(Number(inputN1 )+ Number(inputN2))
 }
 const subtrair =()=>{
  setresultado(Number(inputN1 - Number(inputN2)))
 }

 const multiplicar =()=>{
  setresultado(Number(inputN1 * Number(inputN2)))
  
 }
  return (
    <>
      <h1>Calculadeira</h1>
      <div>
        <input type="Number" 
        value={inputN1}
        onChange={(e)=> setinputN1(e.target.value)}/>

        <input type="Number" 
        value={inputN2}
        onChange={(e)=> setinputN2(e.target.value)}/>
      </div>
      <div>
        <button onClick={somar}>+</button>
        <button onClick={subtrair}>-</button>
        <button onClick={multiplicar}>*</button>
        <button>limpar</button>
      </div>
      <div>
        {resultado}
      </div>
    </>
  )
}

export default App
