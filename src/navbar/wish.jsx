import { useContext } from "react";
import { wishContext } from "./contextWish";
import { contextCart } from "./context";
const Wish = () => {
  const { wish } = useContext(wishContext);
  const{ addToCart}=useContext(contextCart)
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Wishlist ❤️</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {wish.map((item, index) => (
          <div
            key={index}
            style={{
              width: "220px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              width="180"
              height="180"
            />

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <button style={{height:"40px",width:"120px",marginLeft:"9px",backgroundColor:"black", border:"none" , color:"#ffff" ,fontSize:"small"}} onClick={()=> addToCart(item)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wish;