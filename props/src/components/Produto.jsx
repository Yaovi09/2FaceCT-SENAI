import './Produto.css';

function Produto(props){
    return(
<div className='container-produto'>

<p>{props.modelo}</p>
<p>R${props.preco.toFixed(2)}</p>
</div>
    )
}export default Produto;