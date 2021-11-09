import React from 'react';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import { Section, Copyright, Nav, TextLink, IconLink } from './styledFooter';

export default function Footer() {
  return (
    <Section>
      <Copyright>&#169; 2021 McCambley // News API //</Copyright>
      <Nav>
        <TextLink area="H" href="/">
          Home
        </TextLink>
        <TextLink area="P" href="https://jakemccambley.com/" rel="noopener" target="_blank">
          Portfolio
        </TextLink>
        <IconLink
          area="G"
          href="https://github.com/McCambley/news-explorer-frontend"
          rel="noopener"
          target="_blank"
          aria-label="View source code on Github"
          icon={github}
        />
        <IconLink
          area="L"
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
