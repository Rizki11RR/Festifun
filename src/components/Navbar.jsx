import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown, Button, } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home" style={{ marginLeft: '10px' }}>
          <img
            src="https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/d3f45d3e38e2ff56a54fe071a65802c96fffaaab/aset/logo%20biru.png"
            height="30"
            className="d-inline-block align-top"
            alt="Navbar Logo"
          />
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-between align-items-center">
          <Nav style={{ fontFamily: 'Poppins', fontWeight: 500 }}/>
          <div className="d-flex ">
            <Nav.Link href='' style={{ marginRight: '40px' }}>Bereanda</Nav.Link>
            <NavDropdown title="Event" id="event-dropdown"style={{ marginRight: '40px' }}>
              <NavDropdown.Item href="#A">A</NavDropdown.Item>
              <NavDropdown.Item href="#B">B</NavDropdown.Item>
              <NavDropdown.Item href="#C">C</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#tiketku" style={{ marginRight: '40px' }}>Tiketku</Nav.Link>
            <NavDropdown title="Buat Event" id="buat-event-dropdown"style={{ marginRight: '40px' }}>
              <NavDropdown.Item href="#A">A</NavDropdown.Item>
              <NavDropdown.Item href="#B">B</NavDropdown.Item>
              <NavDropdown.Item href="#C">C</NavDropdown.Item>
            </NavDropdown>
            </div>
          <div>
            <Button href="#login" style={{ marginRight: '10px',backgroundColor: '#10468E' }}>Masuk</Button>
            <Button href="#regis" variant="outline-primary">Daftar</Button>
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;
