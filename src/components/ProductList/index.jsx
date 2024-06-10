import { ProductCard } from "./ProductCard";
import styles from './index.module.scss'

export const ProductList = ({ productList }) => {
   return (
      <ul>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </ul>
   );
};
