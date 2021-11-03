import React from 'react';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import { Section, Copyright, Nav, TextLink, IconLink } from './styledFooter';

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
