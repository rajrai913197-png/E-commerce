const User = ({showSetUser})=>{
   let user = JSON.parse(localStorage.getItem("user"))
//    let logout = localStorage.removeItem("user")
    return(
        <>
         <div style={{
  width:"450px",
  height:"550px",
 top:"75px",
left:"20px",
  padding:"20px",
  borderRadius:"5px",
  boxShadow:"0 0 10px gray",
  position:"absolute",
  zIndex:"10",
  backgroundColor:"#090909ad",
  color:"white",
}}>
    <button style={{border:"none" , backgroundColor:"#09080800", zIndex:"10" , color:"white", width:"100%", textAlign:"end"}} onClick={()=>showSetUser(false)}><i class="fa-solid fa-xmark"></i></button>
  <h2>Welcome {user.username} 👋</h2>

  <p><b>Name:</b> Raj</p>
  <p><b>Email:</b> {user.email}</p>
  <hr />
  <div style={{ backgroundColor:"#090808a5", display:"flex" ,flexDirection:"column", width:"120px", height:"300px" , justifyContent:"center",  alignItems:"center" , borderRadius:"10px"}}>
     <button className="userBtn" style={{border:"none", width:"80px", height:"30px", borderRadius:"4px" }}> My Order</button><br /><br />
  <button  className="userBtn"  style={{border:"none" ,  width:"80px" , height:"30px", borderRadius:"4px"}}>Wishlist</button><br /><br />
  <button  className="userBtn"  style={{border:"none" ,  width:"80px" , height:"30px", borderRadius:"4px"}}>Cart</button><br /><br />
  <button className="userBtn"  style={{border:"none" ,  width:"80px" , height:"30px", borderRadius:"4px"}} >Logout</button>
  </div>
</div>
        </>
    )
}
export default User