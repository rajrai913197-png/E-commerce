import { useContext } from "react";
import { contextCart  } from "./context";

const Cart =()=>{
const {cart,removerFromCart}=useContext(contextCart);
return(
<div style={{padding:"30px", height:"auto"}}>
<h1>Shopping Cart</h1>
<table style={{
    width:"100%",
    borderCollapse:"collapse",
    marginTop:"20px"
}}>
<thead>
<tr style={{
background:"#f5f5f5"
}}>
<th style={th}>Image</th>
<th style={th}>Product</th>
<th style={th}>Price</th>
<th style={th}>Size</th>
<th style={th}>Quantity</th>
<th style={th}>Action</th>
</tr>

</thead>


<tbody>

{
cart.map((item,index)=>(

<tr key={index}>

<td style={td}>
<img 
src={item.img}
width="80"
/>
</td>


<td style={td}>
{item.name}
</td>


<td style={td}>
₹{item.price}
</td>


<td style={td}>
{item.size}
</td>


<td style={td}>
1
</td>


<td style={td}>

<button style={{
background:"black",
color:"white",
border:"none",
padding:"8px 15px"
}} onClick={()=> removerFromCart(item.id)}>
Remove
</button>

</td>


</tr>

))
}


</tbody>

</table>


</div>

)

}
const th={
border:"1px solid #ddd",
padding:"15px",
textAlign:"center"
}
const td={
border:"1px solid #ddd",
padding:"15px",
textAlign:"center"
}


export default Cart;
