
import "./Body.css";
import { useState } from "react";

function Body() {
  const[input, setInput] = usestste("")
const[espacoinput, setEspacoInput] = useState("")
  const [ normal, setNormal] = useState([])
  /*const [preferencial, setPreferencial] = useState()*/
    
  function AddNormal(){
if(espacoinput == " "){
    alert("POR FAVOR DIGITE A SUA SENHA!!!")else
{
    setEspacoInput(espacoinput)
    normal.push(espacoinput)

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
        value={normal}
        onChange={(e)=>setNormal(e.target.value)}
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
