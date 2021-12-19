import React from "react";
// import "./navbar.css";
import { Nav, Navbar,Offcanvas, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../photos/Logo.svg';

function NavBar() {
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
     <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#home">
  <img
   src={Logo}
   width='50'
   height='50'
   className="d-inline-block align-top"
   alt='Logo'


  />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">MoonDoc</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
  
          
          <Nav.Link href="https://drive.google.com/file/d/1Y1MD-4wrCvNKJ38vDGKIAovjXAqiSqw-/view?usp=sharing" target="_blank">Resume</Nav.Link>
        
        </Nav>
        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </>
  );
}

export default NavBar;
