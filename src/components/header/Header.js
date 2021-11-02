import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav';
import logo from '../../images/logo.svg';
// import logoBlack from '../../images/logo-black.svg';

const Container = styled.header`
  position: absolute;
  padding: 20px 104px;
  background: rgba(196, 196, 196, 0.01);
  box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.2);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img``;

export default function Header({ loggedIn }) {
  return (
    <Container>
      <Logo src={logo} alt="News Explorer" />
      <Nav loggedIn={loggedIn} />
    </Container>
  );
}
