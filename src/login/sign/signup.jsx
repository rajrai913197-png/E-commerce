import { useState } from "react"
const Sign =({setShowSignup ,setShowLogin })=>{

    const[name,setName] = useState({
        username:"",
        email:"",
        password:"",
        confirm:""

    })
    const signBtn =(e)=>{
        setName({
            ...name,
            [e.target.name]: e.target.value
      
        })
    }
    
     const signEvent=(e)=>{
        e.preventDefault()
        localStorage.setItem("user",JSON.stringify(name))
        let userData = localStorage.getItem("user")
        setShowSignup(false)
        setShowLogin(true)
         if (userData) {
           setTimeout(()=>{
             
           },200)
        }else{
            alert("form not submit")
        }
      
       
     }
    return(
        <>
         <div id="login-main">
             <form  id="login-form" onSubmit={signEvent}></form>
            <div id="login-head">
            <h4>sign up</h4>
            <p>welcome! Create your account and start exploring.</p>
            </div>
           <form  id="login-form" onSubmit={signEvent}>
          <label htmlFor="username" id="label1">Full Name</label>
          <input type="text" placeholder="Name..." name="username" value={name.username}  onChange={signBtn}/> <br />
           <label htmlFor="email" id="label2">Email </label>
            <input type="email" placeholder="Email..." name="email"  value={name.email}  onChange={signBtn}/> <br />
           <label htmlFor="password" id="label3">password</label>
            <input type="password" placeholder="Password..." name="password" value={name.password}   onChange={signBtn}/> <br />
             <label htmlFor="confirm" id="label4"> confirm password</label>
            <input type="password" placeholder="Confirm Password..."  name="confirm" value={name.confirm}  onChange={signBtn}/> <br /> 
            <button type="submit" id="signbtn" >Sign Up</button>
            </form>
          
         </div>
        </>
    )
}
export default Sign;