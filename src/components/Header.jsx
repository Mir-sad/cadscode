import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Style.css"

const Header =()=> {
  return (
    <Navbar expand="lg" className="bg-body-white">
      <Container>
        <Navbar.Brand href="#home">CadsCode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id='menu'/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#home">Tour</Nav.Link>
            <Nav.Link href="#concepts">Benefits</Nav.Link>
            <Nav.Link href="#cards">Features</Nav.Link>
            <Nav.Link href="#templates">Templates</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;