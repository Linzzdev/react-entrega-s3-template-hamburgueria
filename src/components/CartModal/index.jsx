import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from './index.module.scss'
import { useEffect, useRef } from "react";


export const CartModal = ({ cartList , setIsOpen }) => {



   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);


   return (
      <div className={styles.divContainer} role="dialog">
         <div  className={styles.div1} >
            <h2>Carrinho de compras</h2>
            <button aria-label="close" title="Fechar">
               <MdClose size={21} color="#FFFFFF80" />
            </button>
         </div>
         <div>
            <ul>
               {cartList.map((product) => (
                  <CartItemCard key={product.id} product={product} />
               ))}
            </ul>
         </div>
         <div>
            <div>
               <span>Total</span>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button>Remover todos</button>
         </div>
      </div>
   );
};
