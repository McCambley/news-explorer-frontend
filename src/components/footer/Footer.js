import React from 'react';
import { Link } from 'react-router-dom';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';

import styled from 'styled-components/macro';

const Section = styled.footer`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 32px 104px 26px;
  max-width: 1440px;
`;
const Copyright = styled.p`
  color: #b6bcbf;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;
const Nav = styled.nav`
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(4, min-content);
`;

const TextLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #1a1b22;
  text-decoration: none;
`;
const IconLink = styled.a`
  display: block;
  background-image: url(${(props) => props.icon});
  width: 24px;
  height: 24px;
  background-position: center;
  background-size: cover;
`;

export default function Footer() {
  return (
    <Section>
      <Copyright>&#169; 2021 McCambley, Powered by News API</Copyright>
      <Nav>
        <TextLink href="/">Home</TextLink>
        <TextLink href="https://jakemccambley.com/" rel="noopener" target="_blank">
          Portfolio
        </TextLink>
        <IconLink
          href="https://github.com/McCambley/news-explorer-frontend"
          rel="noopener"
          target="_blank"
          aria-label="View source code on Github"
          icon={github}
        />
        <IconLink
          href="https://www.linkedin.com/in/jakemccambley/"
          rel="noopener"
          target="_blank"
          aria-label="Visit Jakes linkedIn"
          icon={linkedin}
        />
      </Nav>
    </Section>
  );
}
