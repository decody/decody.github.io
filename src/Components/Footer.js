import React from "react";
import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledFooter>
            <address>2021 &copy; Decody. All rights reserved.</address>
        </StyledFooter>
    );
};

export default Footer;

const StyledFooter = styled.footer`
    min-height: 30px;
    padding: 60px 10px 40px;
    text-align: center;
`