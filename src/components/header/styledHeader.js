import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import close from '../../images/close.svg';

// overlay only to appear on mobile screens
export const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media (max-width: 480px) {
    //
    display: block;
    background-color: #000000;
    visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.$isOpen ? '.5' : '0')};
    transition: visibility 0.3s ease, opacity 0.3s ease;
  }
`;

export const Section = styled.header`
  position: ${(props) => props.theme.position};
  background: ${(props) => props.theme.background};
  box-shadow: ${(props) => props.theme.shadow};
  width: 100%;
  z-index: 5;

  & * {
    border: 1px solid red;
  }
  @media (max-width: 1024px) {
    //
  }
  @media (max-width: 768px) {
    //
  }
  @media (max-width: 480px) {
    //
    position: absolute;
    /* background-color: ${(props) =>
      props.$isOpen ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'}; */
    /* min-height: ${(props) => (props.$isOpen ? '100vh' : '0')}; */
    /* transition: background-color 0.3s ease; */
  }
`;

export const Container = styled.div`
  padding: 0 104px;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    //
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    //
  }
  @media (max-width: 480px) {
    //
    flex-direction: column;
    padding: 0;
    background: ${(props) => (props.$isOpen ? '#1A1B22' : props.theme.background)};
    transition: background-color 0.3s ease;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    //
    width: 100%;
    padding: 16px;
    background: rgba(196, 196, 196, 0.01);
    box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.2);
  }
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
  @media (max-width: 1024px) {
    //
  }
  @media (max-width: 768px) {
    //
  }
  @media (max-width: 480px) {
    //
  }
`;

export const MenuToggle = styled.button`
  background-image: url(${({ theme, $isOpen }) => ($isOpen ? close : theme.hamburger)});
  background-size: contain;
  background-position: center;
  background-color: transparent;
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding: 0;
  border: none;
  display: none;
  @media (max-width: 1024px) {
    //
  }
  @media (max-width: 768px) {
    //
  }
  @media (max-width: 480px) {
    //
    display: block;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    //
  }
  @media (max-width: 768px) {
    //
  }
  @media (max-width: 480px) {
    //
    max-height: ${(props) => (props.$isOpen ? '250px' : '0')};
    opacity: ${(props) => (props.$isOpen ? '1' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.15s ease;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`;

export const NavLink = styled(Link)`
  border-bottom: ${(props) => (props.$active ? `3px solid ${props.theme.primary}` : 'none')};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: ${(props) => (props.$active ? props.theme.primary : props.theme.secondary)};
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
  @media (max-width: 1024px) {
    //
    font-size: 16px;
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    //
  }
  @media (max-width: 480px) {
    //
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
  min-width: ${(props) => (props.wide ? '176px' : '0')};

  &:hover {
    border: 1px solid ${(props) => props.theme.primary};
  }
  @media (max-width: 1024px) {
    //
    font-size: 16px;
    padding: 8px 12px;
    min-width: ${(props) => (props.wide ? '152px' : '0')};
  }
  @media (max-width: 768px) {
    //
  }
  @media (max-width: 480px) {
    //
  }
`;

export const Logout = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 16px;
  background-image: url(${(props) => props.theme.logout});
  background-size: cover;
  background-position: center;
  @media (max-width: 1024px) {
    //
  }
  @media (max-width: 768px) {
    //
  }
  @media (max-width: 480px) {
    //
  }
`;
