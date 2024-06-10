import { useEffect, useRef, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import styles from "./index.module.scss"
import { api } from "../../data/api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [isOpen, setIsOpen] = useState(false)
   const [cartList, setCartList] = useState([]);
   

   useEffect(() => {
      const getProduct = async () =>{
      const response = await fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      const json = await response.json()
      setProductList(json)
   }
      getProduct()
   },[])

   const setOpen = () =>{
      !setIsOpen ? setIsOpen(false) : setIsOpen(true)
   }

   




   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header setIsOpen={setOpen} />
         <main className={styles.main} >
            <ProductList productList={productList} />
            {!isOpen ? null : <CartModal setIsOpen={isOpen} cartList={cartList} />}
         </main>
      </>
   );
};
