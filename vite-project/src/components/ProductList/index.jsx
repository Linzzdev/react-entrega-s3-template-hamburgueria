import { ProductCard } from "./ProductCard";
import styles from './index.module.scss'

export const ProductList = ({ productList, addToCart }) => {
   return (
      <ul className={styles.ul} >
         {productList.map((product) => (
            <ProductCard  addToCart={addToCart} key={product.id} product={product} />
         ))}
      </ul>
   );
};
