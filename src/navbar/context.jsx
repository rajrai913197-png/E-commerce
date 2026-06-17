import { createContext, useState } from "react";
export const contextCart=  createContext()
export const Contaxt =({children})=>{
    const[cart,setCart]=useState([])
    const addToCart = (product)=>{
setCart([...cart,product]);
console.log(cart);
}
  const removerFromCart = (id)=>{

        setCart((prev)=>

            prev.filter((e)=> e.id !== id)

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