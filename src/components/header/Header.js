import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { homeTheme, savedArticleTheme } from '../style/ThemeStyles';
import { Section, Container, Logo, Nav, NavLink, Button, Logout } from './styledHeader';

export default function Header({ loggedIn, setLoggedIn, setShowSignIn }) {
  const location = useLocation().pathname.substring(1);
  const [isOpen, setIsOpen] = useState(false);

  function handleLogout() {
    setLoggedIn(false);
  }

  return (
    <ThemeProvider theme={location === 'saved-news' ? savedArticleTheme : homeTheme}>
      <Section>
        <Container>
          {false && <Logo to="/">NewsExplorer</Logo>}{' '}
          {false && (
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
                <Button type="button" onClick={() => setShowSignIn(true)}>
                  Sign in
                </Button>
              )}
              {loggedIn && (
                <Button onClick={handleLogout}>
                  Jake
                  <Logout />
                </Button>
              )}
            </Nav>
          )}
        </Container>
      </Section>
    </ThemeProvider>
  );
}
