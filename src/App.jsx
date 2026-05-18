import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

import "./style.css"
let App = ()=>{
  return (
    <>
     <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container id='main-nav'>
          <Navbar.Brand id='logo' href="#">NexCart</Navbar.Brand>
          <div id='links'>
           <a href="">Home</a>
           <a href="">Shop</a>
           <a href="">About</a>
          </div>
          <div id='search-nav'>
           <a href="">Search</a>
           <a href="">Cart icon</a>
           <button id='btn'>Login</button>
          </div>
        </Container>
      </Navbar>
    </Container>
     <Carousel slide={false}>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
export default App