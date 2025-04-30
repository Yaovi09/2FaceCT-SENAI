import { useEffect, useState } from "react";
import "./Sorteio.css";
function Sorteio() {
  const [inputnome, setInputNome] = useState("");
  const [nomes, setNomes] = useState([]);

  useEffect(() => console.log(nomes), [nomes]);

  function AddCliente() {
    /*setInputNome(inputnome)
        nomes.push(inputnome)*/
        if(inputnome == " "){
            alert("Digite teu nome e para o sorteio!!")
        }else{
    setNomes([inputnome, ...nomes]);
    console.log(nomes);
    inputnome("")
  }
  }
  return (
    <div className="container-sorteio">
      <h2>SORTEIO!!</h2>

      <p>Inscreva-se aqui e para o sorteio de uma linda camiseta</p>

      <label htmlFor="">Nome</label>
      <input
        type="text"
        value={inputnome}
        onChange={(e) => setInputNome(e.target.value)}
      />
      <button onClick={AddCliente}>Cadastrar</button>
<button>Faltou Sotear</button>
      {nomes.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}
export default Sorteio;
