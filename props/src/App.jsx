import { useState } from "react";
import "./App.css";
import Produto from "./components/produto";

function App() {
  const [produtos, setProdutos] = useState([
    {
modelo: "Melancia",
preco: 509
    }
    , 
    {
      modelo: "Pneu",
      preco: 9009
    }
    , 
    {
      modelo: "Notebook",
      preco: 764
    }
    , 
    {
      modelo: "Desktop pra jogar ",
      preco: 600
    }
  ])
const testar = () =>{
console.log(produtos)
}
  return (
    <div className="container-app">
      <Produto modelo={"Galaxy A15"} preco={809}/>
      <Produto modelo={`Smart TV 32'' Full HD LED TCL`} preco={971.10}/>
      <Produto modelo={produtos[0].modelo} preco={produtos[0].preco}/>
      <Produto modelo={produtos[1].modelo} preco={produtos[1].preco}/>
      <button onClick={testar}>TESTAR</button>
      {
        produtos.map((item, index) => (
          <Produto key={index} modelo={item.modelo} preco={item.preco}/>
        )) }
    </div>
  );
}

export default App;
