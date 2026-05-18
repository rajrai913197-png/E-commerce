import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css"
let App = ()=>{
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary " id='new-bg' >
      <Container fluid id='main-nav'>
        <Navbar.Brand href="#"><h5 id='logo'>cartify</h5></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Shop</Nav.Link>
            <Nav.Link href="#action3">About</Nav.Link>
             
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#action3">Cart</Nav.Link>
          <Button variant="outline-success">Login </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
export default App