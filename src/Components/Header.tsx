import React from "react";
import { Navbar, NavbarBrand} from "react-bootstrap";
import Logo from "../assets/spaceX.png";

const Header: React.FC<{}> = () => {
  return (
    <Navbar variant="dark">
      <NavbarBrand href="/">
        <img
          alt=""
          src={Logo}
          width={200}
          className="d-inline-block align-top"
        />
      </NavbarBrand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className='font-weight-bold'>
          Github: <a href="https://github.com/MaaviaAsghar4/spaceX-app-with-graphQL-and-Apollo">Code</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
