import React from 'react';
import NewsCard from '../news-card/NewsCard';
import MainCardTop from '../main-card-top/MainCardTop';
import { CardList } from '../shared/styledCardList';
import { Container, Heading, ShowMore } from './styledNewsCardList';

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
