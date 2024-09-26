import { createContext,useState } from "react";

export const Cart=createContext();

export const CartProvider=(props)=>{
    const [cart,setCart]=useState([]);
    const [grandTotal,setGrandTotal]=useState(0);

    const addCartItem=(property)=>{
        setCart((prevItem)=>[...prevItem,property]);
        setGrandTotal((prev)=>prev+property.price);

    }

    const removeCartItem=(property)=>{
        var c=cart.filter((obj)=>{
            return obj.id!=property.id
        })

        setGrandTotal((prev)=>prev-property.price);
        setCart(c);
    }



    return(
        <Cart.Provider value={{cart,setCart,grandTotal,removeCartItem,addCartItem}}>
            {props.children}
        </Cart.Provider>
    )
}