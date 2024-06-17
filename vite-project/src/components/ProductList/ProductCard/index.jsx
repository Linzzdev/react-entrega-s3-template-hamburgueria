import styles from '../index.module.scss'

export const ProductCard = ({ product, addToCart }) => {
    return(
        <li style={styles.li} >
            <img src={product.img} alt={product.name} />
            <div>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <p>{product.price.toLocaleString('pt-BR', {  style: "currency", currency: "BRL"})}</p>
                <button onClick={() => addToCart(product)}>Adicionar</button>
            </div>
        </li>
    )
}