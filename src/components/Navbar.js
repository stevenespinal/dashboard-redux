import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/logo.png`}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span>React Redux Dashbaord</span>
          </Navbar.Brand>
          <Navbar.Text>
            <Link to="/create">Create Dashboard</Link>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
