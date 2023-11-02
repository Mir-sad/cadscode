import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header =()=> {
  return (
    <Navbar expand="lg" className="bg-body-white">
      <Container>
        <Navbar.Brand href="#home">CadsCode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Tour</Nav.Link>
            <Nav.Link href="#link">Benefits</Nav.Link>
            <Nav.Link href="#home">Features</Nav.Link>
            <Nav.Link href="#link">Templates</Nav.Link>
            <Nav.Link href="#home">Testimonials</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;