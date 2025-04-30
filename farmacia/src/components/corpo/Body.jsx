
import "./Body.css";
import { useState } from "react";

function Body() {
  const[input, setInput] = usestste("")
const[espacoinput, setEspacoInput] = useState("")
  const [ normal, setNormal] = useState([])
  
    
  function AddNormal(){
if(input == " "){
    alert("POR FAVOR, DIGITE A SUA SENHA!!!")else
    
{
    setInput(input)
    normal.push(input)

}
}
}
  return (
    <div className="container-Body">
      <div className="espaco-pesquisa">
        <input type="text" placeholder="O que voçe esta buscando?" />
        <button>Pesquisar</button>
      </div>
    
      <div className="espaco-button">
        <input type="Number" placeholder="Senha" className="inpt"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
       <button onClick={AddNormal}>Normal</button>
       <button>Preferencial</button>
      </div>

      <div className="espaco-camisetas">
        <img src="farmarcia-camiseta.webp" className="camisetas" />
        <img src="farmarcia-camisetas.webp" className="camisetas" />
        <img src="farmarcia-cartoes.webp" className="camisetas" />
      </div>
    </div>
  );
}
export default Body;
