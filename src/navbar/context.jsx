import { createContext, useState } from "react";
export const contextCart=  createContext()
import { toast } from "react-toastify";
export const Contaxt =({children})=>{
    const[cart,setCart]=useState([])
    const addToCart = (product)=>{
setCart([...cart,product]);
 toast("Product Added To Wishlist");
console.log(cart);
}
  const removerFromCart = (id)=>{

        setCart((prev)=>

            prev.filter((e)=> e.id !== id),
           toast("Product Remove ")
        );

    };
    return(
        <>
        <contextCart.Provider value={{cart,addToCart ,removerFromCart}}>
         {children}
         </contextCart.Provider >

        </>
    )
}
export default Contaxt;