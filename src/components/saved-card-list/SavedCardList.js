import React from 'react';
import { CardList } from '../shared/styledCardList';
// import NewsCard from '../news-card/NewsCard';
import SavedCard from '../saved-card/SavedCard';
import { Section, Container } from './styledSavedCardList';

export default function SavedCardList({ savedArticles }) {
  return (
    <Section>
      <Container>
        <CardList>
          {savedArticles.map((article, index) => {
            return <SavedCard key={index} article={article} />;
          })}
        </CardList>
      </Container>
    </Section>
  );
}
