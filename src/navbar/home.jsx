import Carousel from 'react-bootstrap/Carousel';
import poster1 from "./new/pumaposter.jpg"
import poster2 from "./new/pumarun.jpg"
import poster3 from "./new/png.avif"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import poster4 from "./new/cart1.avif"
import poster5 from "./new/cart2.avif"
import poster6 from "./new/cart3.avif"
import poster7 from "./new/cart4.avif"
import { useNavigate } from 'react-router-dom';
const Home =()=>{
 const naviget = useNavigate()
    return(
        <>
          <Carousel fade>
      <Carousel.Item>
        <img src={poster1} alt="" style={{width:"100%", height:"550px"}} />
        <Carousel.Caption>
          <h3>FOREVER.FASTER.</h3>
          <p>Run Beyond Limits</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={poster2} alt=""  style={{width:"100%" , height:"550px"}}/>
        <Carousel.Caption>
          <h3>PLAY WITH PASSION</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id='myposter' src={poster3} alt="" style={{width:"100%", height:"550px"}} />
        <Carousel.Caption>
          <h3>STYLE IN MOTION</h3>
          <p>Sport Meets Street</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br />
     <div id='poster-div'>
      <div style={{paddingLeft:"30px",paddingTop:"30px"}}>
       <h1>BUY 2, GET EXTRA 10% OFF</h1>
      <p>Auto-applied at checkout</p>
      </div>
      <button style={{marginLeft:"30px",backgroundColor:"black",border:"none",color:"#ffffff", height:"40px",width:"100px"}}>SHOP NOW</button>
     </div>
     <br />
      <div id='poster-div2'>
      <div style={{paddingLeft:"30px",paddingTop:"200px", color:"#ffffff"}}>
       <h1>FIST-R3</h1>
      <p>The Fastest Shoe We've Ever Made</p>
      </div>
      <button style={{marginLeft:"30px",backgroundColor:"white",border:"none",color:"black", height:"40px",width:"100px"}}>SHOP NOW</button>
     </div>
      <div id='latest'>
        <p>discover the latest</p>
      </div>
      <div id='jur-div'>
        <div id='jur1'>
          <h1>NATIONAL TEAM KIT</h1>
        </div>
        <div id='jur2'>
          <h1>RCB COLLECTION</h1>
        </div>
      </div>
      <div style={{height:"100px" , width:"100%", display:"flex" , justifyContent:"center" ,alignItems:"center" ,flexDirection:"column",marginTop:"20px"}}>
        <h1>FROM TRACK TO STREET</h1>
        <p>INSPIRED BY THE PERFORMANCE GEAR</p>
      </div>
       <div id='carts' >
         <Card style={{ width: '18rem' }}>
      <img src={poster5} alt="" />
      <Card.Body>
        <Card.Title>SCUDERIYA FERRARI</Card.Title>
        <Card.Text>
          Experience the passion of Italian racing heritage with official Ferrari apparel, performance-inspired designs, and iconic motorsport style.
        </Card.Text>
        <Button variant="primary" className='cart-btn' onClick={()=> naviget("/products")}>Explore Collection</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <img src={poster4} alt="" />
      <Card.Body>
        <Card.Title>MERCEDES-AMG <br /> PETRONAS</Card.Title>
        <Card.Text>
          Discover premium teamwear and modern performance fashion inspired by one of Formula One's most successful teams.
        </Card.Text>
        <Button variant="primary"  className='cart-btn' onClick={()=> naviget("/products")}>Explore Collection</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}> 
      <img src={poster6} alt="" />
      <Card.Body>
        <Card.Title>FORMULA 1 <br />COLLECTION</Card.Title>
        <Card.Text>
         Celebrate the speed, energy, and innovation of Formula 1 with exclusive apparel and fan-favorite merchandise.
        </Card.Text>
        <Button variant="primary"  className='cart-btn' onClick={()=> naviget("/products")}>Explore Collection</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <img src={poster7} alt="" />
      <Card.Body>
        <Card.Title>MCLAREN <br /> RACING</Card.Title>
        <Card.Text>
         Explore cutting-edge racing apparel and streetwear inspired by McLaren's legendary performance and engineering excellence.
        </Card.Text>
        <Button variant="primary"  className="cart-btn" onClick={()=> naviget("/products")}>Explore Collection</Button>
      </Card.Body>
    </Card>
       </div>
       <br />
        </>
    )
}
export default Home;