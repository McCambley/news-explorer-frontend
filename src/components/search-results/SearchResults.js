import React from 'react';
import { keyframes } from 'styled-components';
import styled from 'styled-components/macro';
import notFound from '../../images/not-found.svg';
import spinner from '../../images/loading.svg';

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Section = styled.section`
  background-color: #f5f6f7;
`;
const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 104px;
`;
const ArticleList = styled.div``;
const StatusContainer = styled.div`
  display: ${(props) => (props.$display ? 'flex' : 'none')};
`;
const StatusText = styled.p`
  font-family: 'Roboto Slab', serif;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  color: #1a1b22;
`;
const StatusSubtext = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #b6bcbf;
  text-align: center;
`;
const StatusImage = styled.img`
  width: 74px;
  height: 74px;
`;
const StatusSpinner = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border: 4px solid #b6bcbf;
  border-bottom-color: #1a1b22;
  border-radius: 50%;
  opacity: 0.5;
  animation: ${spin} 0.8s infinite linear;
`;

export default function SearchResults({ loading, results, failed }) {
  console.log({ loading, results, failed });
  return (
    <Section>
      <Content>
        <StatusContainer $display={loading}>
          <StatusSpinner />
          <StatusSubtext>Searching for news...</StatusSubtext>
        </StatusContainer>
        <ArticleList>Articles</ArticleList>
        <StatusContainer $display={failed}>
          <StatusImage src={notFound} alt="Not found" />
          <StatusText>Nothing Found</StatusText>
          <StatusSubtext>Sorry, but nothing matched your search terms.</StatusSubtext>
        </StatusContainer>
      </Content>
    </Section>
  );
}
