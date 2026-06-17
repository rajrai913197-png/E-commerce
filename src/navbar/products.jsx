import axios from "axios";
import { useEffect, useState } from "react";
import { contextCart } from "./context";
import { useContext } from "react";
const Products =()=>{
    const{addToCart}=useContext(contextCart)
    const[product,setproduct]=useState([])
    useEffect(()=>{
     axios.get("http://localhost:3000/products")
     .then((res)=> setproduct(res.data))
     .catch(()=>alert("data not found!"))
    },[])
    const myProduct = product.map((e)=>{
        return(
            <>
            <div  style={{

    width: "300px",
    height:"auto",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    margin: "10px",
    marginLeft:"25px"
  }}>
  <img src={e.img} alt="product img"  style={{
 width: "250px", height: "auto",
 objectFit: "cover",
 borderRadius: "10px"

  }} /> <br /> <br />
             <div style={{color:"black", gap: "4px", display:"flex", justifyContent:"start" ,alignItems:"start", flexDirection:"column"}}>
              <h1 style={{fontSize:"15px", textTransform:"uppercase", marginRight:"60px"}}>name -{e.name}</h1>
               <h4 style={{fontSize:"15px" ,paddingLeft:"10px"}}> PRICE -&#8377;{e.price}</h4>
                <h4 style={{fontSize:"15px" ,paddingLeft:"10px"}}> SIZE -{e.size}</h4>
                <button style={{height:"40px",width:"120px",marginLeft:"9px",backgroundColor:"black", border:"none" , color:"#ffff" ,fontSize:"small"}} onClick={()=>addToCart((e))}>ADD-TO-CART</button>
                </div>
               </div>
            </>
        )
    })
    return(
        <>
        <input type="text" />
        <div style={{ display: "grid",
       gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px"}}>
         {myProduct}
        </div>
        </>
    )
}
export default Products;