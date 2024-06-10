
export const ProductCard = ({ product }) => {
    return(
        <li>
            <img src={product.img} alt={product.name} />
            <div>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <p>{product.price.toLocaleString('pt-BR', {  style: "currency", currency: "BRL"})}</p>
                <button>Adicionar</button>
            </div>
        </li>
    )
}