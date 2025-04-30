import { useEffect, useState } from "react";
import "./App.css";
import Produto from "./components/produto";

function App() {
  
  const [inputModelo, setInputModelo] = useState("");
  const [inputPreco, setInputPreco] = ("");

  const [produtos, setProdutos] = useState([

  {id:Date.now(), modelo: "Melancia", preco: 509 },
  {id:Date.now()+1, modelo: "Pneu",preco: 9009},
  {id:Date.now()+2, modelo: "Notebook",preco: 764},
  {id:Date.now()+3, modelo: "Desktop pra jogar ",preco: 600 },
  {id:Date.now()+4, modelo: "Garrafa", preco: 50}

  ])

  useEffect(()=>
    console.log(produtos)
  ,[produtos])

  useEffect(()=>
    console.log("Carregando dados...")
    ,[])

const testar = () =>{
//console.log(produtos);
let produto = {
  id: Date.now(),
   modelo: "Produto Secreto",
   preco: 10
}
setProdutos([...produtos, produto])

}

function AddNoProduto(){
  let produto = {
    id: Date.now(),
     modelo: inputModelo,
     preco: Number(inputPreco)
  }
  setProdutos([...produtos, produto])
  
}
  return (
    <div className="container-app">
      <div className="form-produto">
        <label htmlFor="modelo">Modelo</label>
        <input type="text"
        value={inputModelo}
        onChange={(e)=> setInputModelo(e.target.value)}
         />
         <label htmlFor="preco">Preco</label>
        <input type="Number"
        value={inputPreco}
        onChange={(e)=>setInputPreco(e.target.value)}
         />
        <button onClick={AddNoProduto}>Cadastrar</button>
      </div>
     

      <div className="cards">
      <button onClick={testar} className="buttom-produto">TESTAR</button>
      {
        produtos.map((item) => (
          <Produto key={item.id} modelo={item.modelo} preco={item.preco} id={item.id}/>
        )) }
      </div>
      
    </div>
  );
}

export default App;
