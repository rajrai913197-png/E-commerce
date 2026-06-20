import { BrowserRouter,Routes , Route } from "react-router-dom"
import Layout from "./navbar/layout"
import Home from "./navbar/home"
import Men from "./navbar/men"
import Women from "./navbar/women"
import Kids from "./navbar/kids"
import Sports from "./navbar/sports"
import Wish from "./navbar/wish"
import Cart from "./navbar/cart"
import Admin from "./navbar/admin"
import Login from "./login/sign/login"
import { ToastContainer } from "react-bootstrap"
import Products from "./navbar/products"
import Sign from "./login/sign/signup"

const App =()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Layout />}>
      <Route  index element={<Home />} />
      <Route  path="men" element={<Men />} />
      <Route  path="women" element={<Women />} />
      <Route  path="kids" element={<Kids/>} />
      <Route   path="sports" element={<Sports/>} />
       <Route   path="wish" element={<Wish />} />
       <Route   path="cart" element={<Cart />} />
       <Route   path="admin" element={<Admin />} />
       <Route   path="login" element={<Login />} />
       <Route   path="products" element={<Products />} />
       <Route   path="sign" element={<Sign />} />
      </Route>
    </Routes>
    <ToastContainer />
    </BrowserRouter>
    </>   
  )
}
export default App