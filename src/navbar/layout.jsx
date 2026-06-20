import { useState } from "react";
import img1 from "./new/puma.jpg"
import { Link,useNavigate,Outlet } from "react-router-dom";
import Sign from "../login/sign/signup";
import Login from "../login/sign/login";
import User from "./user";
const Layout = ()=>{
  const[showUser,showSetUser]=useState(false)
   const [showSignup, setShowSignup] = useState(false);
   const [showLogin, setShowLogin] = useState(false);
     const navigate = useNavigate()
     const clickEvent =()=>{
            const user = localStorage.getItem("user")
        if (user) {
            navigate("/wish")
           
        } else{
            setTimeout(()=>{
                 setShowSignup(true)
            },200)
        }
        }
        const myUser = ()=>{
           const user = localStorage.getItem("user")
          if (user) {
            showSetUser(true)
          }else{
            setShowSignup(true)
          }
        }

    return(
        <>
        
       {showSignup &&
            <Sign  setShowSignup={setShowSignup}   setShowLogin={setShowLogin}/> 
            }
             { showLogin && <Login  setShowLogin={setShowLogin} />}
          { showUser && <User  showSetUser={showSetUser}/>}
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
       <Link to="wish" className="linksLogo" onClick={(e)=>{e.preventDefault(); clickEvent()}}><i class="fa-regular fa-heart"></i></Link>
       <Link to="cart" className="linksLogo"><i class="fa-solid fa-cart-arrow-down"></i></Link>
       <Link to="admin" className="linksLogo" onClick={(e)=> {e.preventDefault(); myUser()}}><i class="fa-solid fa-user"></i></Link>
       
        </div>
        </div>
      
       <Outlet />
        <footer

      style={{

        background: "#111",

        color: "#fff",

        padding: "60px 80px 30px",

        fontFamily: "Arial, sans-serif",

      }}

    >

      <div

        style={{

          display: "grid",

          gridTemplateColumns: "repeat(4,1fr)",

          gap: "40px",

          borderBottom: "1px solid #333",

          paddingBottom: "40px",

        }}

      >

        <div>

          <h3 style={{ marginBottom: "20px", fontSize: "18px" }}>

            SUPPORT

          </h3>

          {["Contact Us", "Track Order", "Returns", "Shipping Info", "FAQs"].map(

            (item) => (

              <p

                key={item}

                style={{

                  color: "#bdbdbd",

                  marginBottom: "12px",

                  cursor: "pointer",

                }}

              >

                {item}

              </p>

            )

          )}

        </div>

        <div>

          <h3 style={{ marginBottom: "20px", fontSize: "18px" }}>

            ABOUT

          </h3>

          {["Company", "Careers", "News", "Investors", "Sustainability"].map(

            (item) => (

              <p

                key={item}

                style={{

                  color: "#bdbdbd",

                  marginBottom: "12px",

                  cursor: "pointer",

                }}

              >

                {item}

              </p>

            )

          )}

        </div>

        <div>

          <h3 style={{ marginBottom: "20px", fontSize: "18px" }}>

            EXPLORE

          </h3>

          {["Men", "Women", "Kids", "Sports", "Collections"].map((item) => (

            <p

              key={item}

              style={{

                color: "#bdbdbd",

                marginBottom: "12px",

                cursor: "pointer",

              }}

            >

              {item}

            </p>

          ))}

        </div>

        <div>

          <h3 style={{ marginBottom: "20px", fontSize: "18px" }}>

            STAY UP TO DATE

          </h3>

          <input

            type="email"

            placeholder="Enter your email"

            style={{

              width: "100%",

              padding: "12px",

              background: "#1c1c1c",

              border: "1px solid #444",

              color: "#fff",

              marginBottom: "12px",

              outline: "none",

            }}

          />

          <button

            style={{

              width: "100%",

              padding: "12px",

              background: "#fff",

              color: "#000",

              border: "none",

              fontWeight: "bold",

              cursor: "pointer",

            }}

          >

            SUBSCRIBE

          </button>

        </div>

      </div>

      <div

        style={{

          marginTop: "30px",

          display: "flex",

          justifyContent: "space-between",

          alignItems: "center",

          flexWrap: "wrap",

        }}

      >

        <div style={{ display: "flex", gap: "20px", fontSize: "24px" }}>

          <span>📘</span>

          <span>📷</span>

          <span>▶️</span>

          <span>🐦</span>

        </div>

        <div style={{ color: "#888" }}>

          © 2026 PUMA Inspired Store. All Rights Reserved.

        </div>

      </div>

    </footer>
        </>
    )
}
export default Layout;