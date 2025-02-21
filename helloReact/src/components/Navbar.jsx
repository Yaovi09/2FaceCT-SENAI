import './Navbar.css'
function Navbar(){
    return(
        /*Dentro de jsx nos precisamos colocar so 1 elemento ,
        pai e filho*/
        <div className='container-navbar'>
           <img src="logo.jpg" alt="" />
          <p className='eco'>EcoTecDescart</p> 

        </div>

    )
}
export default Navbar;