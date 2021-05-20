import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <StyledHeader>
            <h1>
                <Link to="/">Decody.</Link>
            </h1>
            <div>
                <nav className="nav-link">
                    <Link to="/">About</Link>
                    <Link to="/">Course</Link>
                </nav>
            </div>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.05);
    z-index: 10;

    h1 {
        float: left;
        padding: 2px 20px;
        color: var(--link-color);
        text-transform: lowercase;
        font-weight: var(--font-bold);
        font-size: 1.4rem;
    }

    .nav-link {
        float: right;
        padding: 5px 20px;
        
        a {
            display: inline-block;
            padding: 2px 10px;
            font-weight: var(--font-bold);
        }
    }
`