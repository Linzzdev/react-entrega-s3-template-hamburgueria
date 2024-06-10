import { MdDelete } from "react-icons/md";
import styles from './index.module.scss'

export const CartItemCard = ({ product }) => {
   return (
      <li className={styles.li} > 
         <div>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
         </div>
         <button aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
