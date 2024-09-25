import { createContext,useState } from "react";

export const Cart=createContext(null);

export const CartProvider=(props)=>{
    const [cart,setCart]=useState([]);
    return(
        <Cart.Provider value={{cart,setCart}}>
            {props.children}
        </Cart.Provider>
    )
}