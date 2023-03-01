import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import HighlightIcon from "@mui/icons-material/Highlight";
import "./header.css";

const Header = () => {
  return (
    <Navbar bg="warning" variant="dark" className="header">
      <div>
        <Navbar.Brand href="#home">
          <HighlightIcon
            width="30"
            height="30"
            className="d-inline-block align-top nav-highlight-icon"
          />
          React Keep Notes
        </Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default Header;
