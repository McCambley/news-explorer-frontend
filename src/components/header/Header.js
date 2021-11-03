import React from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { homeTheme, savedArticleTheme } from '../style/ThemeStyles';
import { Section, Container, Logo, Nav, NavLink, Button, Logout } from './styledHeader';

export default function Header({ loggedIn, setLoggedIn }) {
  const location = useLocation().pathname.substring(1);

  function handleLoginLogout() {
    setLoggedIn(!loggedIn);
  }

  return (
    <ThemeProvider theme={location === '' ? homeTheme : savedArticleTheme}>
      <Section>
        <Container>
          <Logo to="/">NewsExplorer</Logo>
          <Nav>
            <NavLink to="/" $active={location === ''}>
              Home
            </NavLink>
            {loggedIn && (
              <NavLink to="/saved-news" $active={location === 'saved-news'}>
                Saved articles
              </NavLink>
            )}
            {!loggedIn && (
              <Button type="button" onClick={handleLoginLogout}>
                Sign in
              </Button>
            )}
            {loggedIn && (
              <Button onClick={handleLoginLogout}>
                Jake
                <Logout />
              </Button>
            )}
          </Nav>
        </Container>
      </Section>
    </ThemeProvider>
  );
}
