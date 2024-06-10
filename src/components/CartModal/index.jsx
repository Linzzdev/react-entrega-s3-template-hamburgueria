import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from './index.module.scss'
import { useEffect, useRef } from "react";


export const CartModal = ({ cartList , isOpen, removeFromCart }) => {

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const modalRef = useRef(null)

   useEffect(() =>{
     const handleOutClick = (event) => {
        if(!modalRef.current?.contains(event.target)){
           isOpen(false)
        }
     }
   },[])

   const buttonRef = useRef(null)
   useEffect(() =>{
     const handleKeyDown = (event) =>{
        if(event.key === "Backspace"){
           buttonRef.current?.click()
        }
     }
     window.addEventListener("keydown", handleKeyDown)
     return() => {
        window.removeEventListener("keydown", handleKeyDown)
     }
   },[])


   return (
      <div className={styles.divContainer} role="dialog">
         <div ref={modalRef} className={styles.div1} >
            <h2>Carrinho de compras</h2>
            <button ref={buttonRef} onClick={() => isOpen(false) } aria-label="close" title="Fechar">
               <MdClose size={21} color="#FFFFFF80" />
            </button>
         </div>
         <div className={styles.div2}>
            <ul>
               {cartList.map((product) => (
                  <CartItemCard removeFromCart = {removeFromCart} key={product.id} product={product} />
               ))}
            </ul>
         </div>
         <div className={styles.div3}>
            <div className={styles.div3} >
               <span>Total</span>
               <span color="#828282"> {total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button>Remover todos</button>
         </div>
      </div>
   );
};
