import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css"
let App = ()=>{
  return (
    <>
     <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container id='main-nav'>
          <Navbar.Brand href="#">NexCart</Navbar.Brand>
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
    </>
  )
}
export default App