import React, { useState } from 'react';
import styled from 'styled-components/macro';

const Section = styled.section`
  background: #fff;
  max-width: 1440px;
  padding: 40px 104px;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: rgba(26, 27, 34, 0.5);
  margin-bottom: 28px;
`;
const Greeting = styled.h2`
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  max-width: 530px;
  color: #1a1b22;
  margin-bottom: 30px;
`;
const Keywords = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #1a1b22;
`;
const List = styled.span`
  font-weight: 700;
`;

export default function SavedHero({ savedArticles }) {
  const [keywordList, setKeywordList] = useState('Nature, Yellowstone, and 2 others');

  return (
    <Section>
      <Title>Saved Articles</Title>
      <Greeting>Jake, you have {savedArticles.length} saved articles</Greeting>
      <Keywords>
        By keywords:
        <List>{keywordList}</List>
      </Keywords>
    </Section>
  );
}
