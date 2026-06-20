import { useState, createContext } from "react";
import { toast } from "react-toastify";

export const wishContext = createContext();

const WishCon = ({ children }) => {
  const [wish, setWish] = useState([]);
  console.log(wish);
  
  const addToWish = (product) => {
    setWish((prev) => [...prev, product]);
    toast("Product Added To Wishlist");
  };

  return (
    <wishContext.Provider value={{ wish, addToWish }}>
      {children}
    </wishContext.Provider>
  );
};

export default WishCon;