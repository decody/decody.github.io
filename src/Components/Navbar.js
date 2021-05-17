import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <StyledNavbar>
            <Link to="/" className="link-home">
                <i className="fas fa-home"></i> Home
            </Link>
        </StyledNavbar>
    );
};

export default Navbar;

const StyledNavbar = styled.nav`
  padding: 40px 0 30px;

  .link-home {
    color: var(--link-color);
  }
`
