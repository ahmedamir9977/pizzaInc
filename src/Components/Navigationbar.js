import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="MainNav py-0 sticky-top ">
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand>pizzaInc.</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="my-2" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={"me-auto"}>
            <div className="right-side-nav d-lg-flex">
              <Link
                to="/"
                className="nav-link py-3 text-decoration-none"
                href="#home"
              >
                home
              </Link>
              <Link
                to="/bookatable"
                className="nav-link py-3 text-decoration-none"
              >
                book a table
              </Link>
            </div>
            <div className="left-side-nav d-lg-flex">
              <Link to="/staff" className="nav-link py-3 text-decoration-none">
                staff only
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
