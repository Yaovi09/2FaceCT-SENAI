import './Corpo.css'
function Corpo() {
    function alertarUsuario(){
        alert("Cuidadoooooooooo!! Voçe acabou de mundo de programação.")
    }
  return (
    <div className="container-corpo">
      <h1>Desbravando o React</h1>
      <p>Vamos começar a nosso aventura!</p>
    
      <button onClick={alertarUsuario}>Entrar</button>
      
    </div>
  );
}
export default Corpo;
