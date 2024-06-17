import { useEffect, useRef, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import styles from "./index.module.scss"
import { api } from "../../data/api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [isOpen, setIsOpen] = useState(false)
   const [cartList, setCartList] = useState(
      JSON.parse(localStorage.getItem("@CARRINHO")) || []
    ); 

   

   useEffect(() => {
      const getProduct = async () =>{
      const response = await fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      const json = await response.json()
      setProductList(json)
   }
      getProduct()
   },[])

   useEffect(() =>{
      {cartList.length < 1 ? (setIsOpen(false)) :
         localStorage.setItem("@CARRINHO", JSON.stringify(cartList))
         console.log(cartList)
      }
   },[cartList])

   useEffect(() => {
      return () => {
        localStorage.removeItem("@CARRINHO"); 
      };
    }, [cartList]);

   const addToCart = (product) => {
      const productExists = cartList.some((item) => item.id === product.id);
    
      if (!productExists) {
        setCartList([...cartList, product]);
      } else {
        alert("Produto já adicionado"); 
      }
    };

   const removeFromCart = (product) => {
      setCartList(cartList.filter((cartItem) => cartItem.id !== product.id));
    };

    const removeAll = () => {
      localStorage.removeItem("@CARRINHO");
      setIsOpen(false)
      setCartList([]); 
    };


    const setOpen = (turnopen) =>{
      {cartList < 1 ? alert("Carrinho vazio!") : setIsOpen(turnopen) }
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
            <ProductList removeFromCart={removeFromCart} addToCart = {addToCart} productList={productList} />
            {isOpen === true? <CartModal removeAll={removeAll}   removeFromCart = {removeFromCart} isOpen={setOpen} cartList={cartList}/> : <p>""</p> }
         </main>
      </>
   );
};
