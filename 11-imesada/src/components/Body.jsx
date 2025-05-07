import "./Body.css";
function Body() {
  return (
    <div className="container-body">
      <h1>Controlinho Financeiro</h1>
      <div className="espaco-saldo">
        <img src="logo-money.svg" /> 
        <p>Saldo: $R 50000</p>
      </div>

      <input type="text" placeholder="Valor" />
      <div className="espaco-button">
        <button className="credi">Crédito</button>
        <button className="debito">Débito</button>
      </div>
    </div>
  );
}
export default Body;
