
import { useState } from 'react'
import './App.css'
import Desenvolvedor from './componentes/desenvolvedor/Desenvolvedor'
import Frontend from './componentes/frontend/Frontend'
import Backend from './componentes/backend/Backend'
import Fullstack from './componentes/fullstack/Fullstack'

function App() {
const [ oracao, setoracao] = useState("")

  return (
  <div>
    <div><h1>Painel de Orãçoes</h1></div>
    <button onClick={()=>setoracao(<Desenvolvedor/>)}>Oração do Desenvolvedor</button>
    <button onClick={()=> setoracao(<Frontend/>)}>Oração do Frontend</button>
    <button onClick={()=> setoracao(<Backend/>)}>Oração do Backend</button>
    <button onClick={()=>setoracao(<Fullstack/>)}>Oração do Fullstack</button>
<div className='espacoDiv'>
  {oracao}
</div>
  </div>
    
     
 
  )
}

export default App
