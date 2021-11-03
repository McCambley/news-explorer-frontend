import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Section = styled.header`
  position: absolute;
  background: ${(props) => props.theme.background};
  box-shadow: ${(props) => props.theme.shadow};
  width: 100%;
`;

export const Container = styled.header`
  padding: 0 104px;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled(Link)`
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-decoration: none;
  color: ${(props) => props.theme.primary};
  transition: color 0.15s ease;

  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  border-bottom: ${(props) => (props.active ? `3px solid ${props.theme.primary}` : 'none')};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: ${(props) => (props.active ? props.theme.primary : props.theme.secondary)};
  padding: 0px 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 34px;
  height: 80px;
  box-sizing: border-box;
  transition: color 0.15s ease;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;
export const Button = styled.button`
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  border: 1px solid ${(props) => props.theme.tertiary};
  color: ${(props) => props.theme.primary};
  border-radius: 100px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border 0.15s ease;

  &:hover {
    border: 1px solid ${(props) => props.theme.primary};
  }
`;

export const Logout = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 16px;
  background-image: url(${(props) => props.theme.logout});
  background-size: cover;
  background-position: center;
`;
