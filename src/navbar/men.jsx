import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import poster1 from "/Users/apple/Downloads/E-commerce/src/navbar/new/viratbhai.jpg"
import men1 from "/Users/apple/Downloads/E-commerce/src/navbar/new/card1Men.avif"
import men2 from "/Users/apple/Downloads/E-commerce/src/navbar/new/men2.avif"
import { useNavigate } from 'react-router-dom';
const Men =()=>{
    let navigate = useNavigate()
    return(
        <>
         <Carousel>
      <Carousel.Item>
        <img src={poster1} alt="" style={{height:"600px", width:"100%"}} />
        <Carousel.Caption>
          <h3>Mens Special</h3>
          <p>Built For Speed
Upgrade your game with the latest men's footwear and activewear.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> <br />
    <h1 style={{textAlign:"center"}}>SPECIAL CARDS FOR MENS</h1>
    <br />
    <div style={{ display:"grid",

    gridTemplateColumns:"repeat(4, 1fr)",

    gap:"25px",  padding:"50px"}}>
         <Card style={{ width: '18rem' }}>
      <img src={men1} alt="" />
      <Card.Body>
        <Card.Title> Puma Velocity Runner</Card.Title>
        <Card.Text>
         Lightweight running shoes with soft cushioning and breathable design.

Perfect for daily running and casual wear.
        </Card.Text>
        <Button variant="primary " onClick={()=> navigate("/products")}>Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
     <img src={men2} alt="" />
      <Card.Body>
        <Card.Title>Puma RS-X Street</Card.Title>
        <Card.Text>
         Bold street style sneakers with premium comfort and modern look.
Made for everyday fashion and lifestyle.
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate("/products")}>Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <img src={men1} alt="" />
      <Card.Body>
        <Card.Title> Puma Velocity Runner</Card.Title>
        <Card.Text>
         Lightweight running shoes with soft cushioning and breathable design.

Perfect for daily running and casual wear.
        </Card.Text>
        <Button variant="primary " onClick={()=> navigate("/products")}>Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
     <img src={men2} alt="" />
      <Card.Body>
        <Card.Title>Puma RS-X Street</Card.Title>
        <Card.Text>
         Bold street style sneakers with premium comfort and modern look.
Made for everyday fashion and lifestyle.
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate("/products")}>Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <img src={men1} alt="" />
      <Card.Body>
        <Card.Title> Puma Velocity Runner</Card.Title>
        <Card.Text>
         Lightweight running shoes with soft cushioning and breathable design.

Perfect for daily running and casual wear.
        </Card.Text>
        <Button variant="primary " onClick={()=> navigate("/products")}>Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
     <img src={men2} alt="" />
      <Card.Body>
        <Card.Title>Puma RS-X Street</Card.Title>
        <Card.Text>
         Bold street style sneakers with premium comfort and modern look.
Made for everyday fashion and lifestyle.
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate("/products")}>Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <img src={men1} alt="" />
      <Card.Body>
        <Card.Title> Puma Velocity Runner</Card.Title>
        <Card.Text>
         Lightweight running shoes with soft cushioning and breathable design.

Perfect for daily running and casual wear.
        </Card.Text>
        <Button variant="primary " onClick={()=> navigate("/products")}>Go somewhere</Button>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
     <img src={men2} alt="" />
      <Card.Body>
        <Card.Title>Puma RS-X Street</Card.Title>
        <Card.Text>
         Bold street style sneakers with premium comfort and modern look.
Made for everyday fashion and lifestyle.
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate("/products")}>Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
        </>
    )
}
export default Men;