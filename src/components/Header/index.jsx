import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import styles from './index.module.scss'
import { MdShoppingCart } from "react-icons/md";

export const Header = ({setIsOpen}) => {
   const [value, setValue] = useState("");

   return (
      <header className={styles.header}>
         <div>
         <img src={Logo} alt="Logo Kenzie Burguer" />
            <button onClick={() => setIsOpen(true)} >
                <MdShoppingCart color="#BDBDBD" fontWeight="900" size="26"   />
                <span>0</span>
            </button>
         </div>
      </header>
   );
};
