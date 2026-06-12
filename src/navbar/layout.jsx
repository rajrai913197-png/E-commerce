import { useState } from "react";
import img1 from "./new/puma.jpg"
import { Link,useNavigate,Outlet } from "react-router-dom";
import Sign from "../login/sign/signup";

const Layout = ()=>{
    const[showLogin,setShowLoging]=useState(false)
     const navigate = useNavigate()
     const clickEvent =()=>{
        const user = localStorage.getItem("user")
        if (user) {
            navigate("/wish")
           
        } else{
            setShowLoging(true)
        }
        }
    return(
        <>
       {showLogin && <Sign /> }
       <div id="navBar">
       <img src={img1}alt="logo" id="logo" />
        <div id="links">
       <Link to="/" className="navLink" > Home</Link>
       <Link to="men" className="navLink" > Men</Link>
       <Link to="women"className="navLink" > Women</Link>
       <Link to="kids" className="navLink"> Kid</Link>
       <Link to="sports" className="navLink"> Sports</Link>
        </div>
        <div id="cartsLink">
        <button id="subBtn"><i class="fa-solid fa-magnifying-glass"></i>SEARCH</button>
       <Link to="wish" className="linksLogo" ><i class="fa-regular fa-heart" onClick={clickEvent}></i></Link>
       <Link to="cart" className="linksLogo"><i class="fa-solid fa-cart-arrow-down"></i></Link>
       <Link to="admin" className="linksLogo"><i class="fa-solid fa-user"></i></Link>
        </div>
        </div>
      
       <Outlet />
        </>
    )
}
export default Layout;