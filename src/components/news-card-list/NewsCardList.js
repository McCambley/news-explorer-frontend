import React from 'react';
import styled from 'styled-components/macro';
import NewsCard from '../news-card/NewsCard';
import MainCardTop from '../main-card-top/MainCardTop';
import { CardList } from '../shared/styledCardList';

const Container = styled.div`
  padding: 80px 0px;
`;
const Heading = styled.h2`
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  margin-bottom: 64px;
`;
const ShowMore = styled.button`
  cursor: pointer;
  display: block;
  background-color: #fff;
  border-radius: 80px;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  padding: 20px 98px;
  margin: 64px auto 0;
  color: #1a1b22;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #e8e8e8;
  }
`;

export default function NewsCardList({ searchResults, loggedIn }) {
  return (
    <Container>
      <Heading>Search Results</Heading>
      <CardList>
        {searchResults.map((article, index) => {
          return (
            <NewsCard key={index} article={article}>
              <MainCardTop loggedIn={loggedIn} article={article} />
            </NewsCard>
          );
        })}
      </CardList>
      <ShowMore>Show more</ShowMore>
    </Container>
  );
}
