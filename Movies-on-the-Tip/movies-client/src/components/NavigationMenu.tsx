import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import {
  faClapperboard,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { InputGroup } from "react-bootstrap";
import { useContext } from "react";
import SearchContext from "../contexts/SearchContext";

const NavigationMenu = () => {
  const { search } = useContext(SearchContext);
  return (
    <nav>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/movies-in-theaters">
            <FontAwesomeIcon icon={faClapperboard} className="me-1" />
            Movies-<span>on the Tip</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/movies-coming">
                Comming Soon
              </Nav.Link>
              <Nav.Link as={NavLink} to="/top-rated-india">
                Top rated Indian
              </Nav.Link>
              <Nav.Link as={NavLink} to="/top-rated-movies">
                Top rated movies
              </Nav.Link>
              <Nav.Link as={NavLink} to="/favourite">
                Favorite list
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <InputGroup>
              <InputGroup.Text id="btnGroupAddon">
                <FontAwesomeIcon className="me-auto" icon={faMagnifyingGlass} />
              </InputGroup.Text>
              <input
                type="search"
                placeholder="search movie"
                className="form-control"
                onChange={search}
              />
            </InputGroup>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavigationMenu;
