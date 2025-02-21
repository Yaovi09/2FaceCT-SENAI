

import { useState } from 'react'
import './App.css'

function App() {
  let nome = "Yaovi"
 const [usuario, setusuario] = useState('');
 function lernome(){
  
 }

function lerusuario(){
let resposta = prompt("Digite o nome ussuario")
setusuario(resposta)
}

  return (
    <>
      <h1>estados</h1>
      Nome: {nome}
     
      <div>
      usuario : {usuario}
      </div>
        <button onClick={lernome}>Trocar nome</button> 
       <button onClick={lerusuario}>Trocar usuario</button>
            
    </>
  )
}

export default App
