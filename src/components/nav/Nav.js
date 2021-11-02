import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.nav`
  color: #fff;
  display: flex;
`;
const StyledLink = styled(Link)`
  border-bottom: 3px solid #1a1b22;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
`;
const Button = styled.button``;

export default function Nav({ loggedIn }) {
  const location = useLocation().pathname.substring(1);

  return (
    <Container>
      <StyledLink to="/">Home</StyledLink>
      {loggedIn && <StyledLink to="/saved-articles">Saved articles</StyledLink>}
      {!loggedIn && <Button>Sign in</Button>}
      {loggedIn && <Button>Jake</Button>}
    </Container>
  );
}
