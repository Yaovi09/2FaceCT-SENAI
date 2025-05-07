
import "./Body.css";
import { useState } from "react";

function Body() {
  const[input, setInput] = useState('');
  const [ normal, setNormal] = useState([])
  
    
  function AddNormal(){
if(input == ' '){
  alert("DIGIGITE SUA SENHA E PARTICIPA AO NOSSO SORTEIO!!")
}else{
    setNormal([... normal, input])
    setInput('');
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

      {
        normal.map((item)=>{
          return(
            <div className="espacoDiv">{item}</div>
          )
        })
      }
    </div>
  );
}
export default Body;
