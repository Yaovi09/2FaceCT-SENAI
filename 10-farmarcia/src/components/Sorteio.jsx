import { useEffect, useState } from "react";
import "./Sorteio.css";
function Sorteio() {
  const [inputnome, setInputNome] = useState("");
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    if (nomes.length == 10) {
      alert("parabens");
    }
  }, [nomes]);
  // useeffect sem array no fim rederiza tudo a pagina
  // useefect com [array] renderiza em funcao de array
  function AddCliente() {
    setNomes([inputnome, ...nomes]);
    setInputNome("");
  }

  function sortearCliente() {
    let i = Math.floor(Math.random() * nomes.length);
    let sorteado = nomes[i];
    alert(`Cliente sorteado: ` + sorteado);

    setNomes(nomes.filter((nome) => nome != sorteado));
  }

  return (
    <div className="container-sorteio">
      <h2>!!SORTEIO!!</h2>

      <p>Inscreva-se aqui e para o sorteio de uma linda camiseta</p>

      <label htmlFor="">Nome</label>
      <input
        type="text"
        value={inputnome}
        onChange={(e) => setInputNome(e.target.value)}
      />
      <div className="espaco-button">
        <button onClick={AddCliente}>Cadastrar</button>
        <button onClick={sortearCliente}> Sotear</button>
      </div>
      <p>({nomes.length}) pessoas se cadastrou</p>
      {nomes.map((item) => {
        return <div className="espaco-res-sorteio">{item}</div>;
      })}
    </div>
  );
}
export default Sorteio;
