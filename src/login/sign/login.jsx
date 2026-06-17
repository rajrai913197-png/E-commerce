import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Login =({setShowLogin})=>{
  
    let navigate=useNavigate()
 const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const eventSubmit=(e)=>{
e.preventDefault();
let user = JSON.parse(localStorage.getItem("user"))
if(user && user.email === email && user.password === password){

  toast.success("LOGIN SUCCESS")
    navigate("/wish")
    setShowLogin(false)
}else{

   toast.error("PLEASE FILL THE RIGHT INPUTS")

}

}
    return(
        <>
        <form  id="Login-Page" onSubmit={eventSubmit}>
            <h4   style={{ fontSize:"medium"}}>LOGIN-PAGE</h4>
             <label htmlFor="email"  style={{textTransform:"uppercase", fontSize:"small"}} >Confirm-Email</label>
            <input type="email"  name="email" onChange={(e)=>setEmail(e.target.value)}/> <br /><br />
             <label htmlFor="confirm" style={{textTransform:"uppercase" ,fontSize:"small"}}>Confirm - Password</label>
            <input type="password" name="confirm" onChange={(e)=>setPassword(e.target.value)}/> <br /> <br />
            <button >SUBMIT HERE</button>
        </form>
        </>
    )
}
export default Login