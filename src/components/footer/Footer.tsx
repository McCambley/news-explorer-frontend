import React from 'react';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';
import { Section, Copyright, Nav, TextLink, IconLink } from './styledFooter';
import { newsApi } from '../../utils/NewsApi';

export default function Footer(): JSX.Element {
  function handleCopyClick() {
    newsApi
      .getSources()
      .then((response: any) => console.info(response.sources))
      .catch((error: Error) => console.error(error));
  }
  return (
    <Section>
      <Copyright onClick={handleCopyClick}>&#169; 2021 McCambley // News API //</Copyright>
      <Nav>
        <TextLink area="H" href="/news-explorer-frontend/">
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
