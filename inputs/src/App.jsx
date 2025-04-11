import { useState } from "react";
import "./App.css";

function App() {
  const [inputValor, setinputValor] = useState("");
  const [numero, setnumero] = useState("");

  
 function efetuarlogin() {
  
 (Number(numero) + Number(inputValor))

 }

  
  return (
    <>
      <div className="container-app">
        <h1>Calculador</h1>
        <input
          type="Number"
          value={inputValor}
          onChange={(event) => setinputValor(event.target.value)}
        />
      
       <button >+</button>
       <button>*</button>
        <input
          type="Number"
          value={numero}
          onChange={(e) => setnumero(e.target.value)}
        />
        <button onClick={efetuarlogin}>Login</button>
        <div >{adicionar}</div>
      </div>
    </>
  );
}

export default App;
