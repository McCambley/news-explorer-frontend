import React from 'react';
import { CardList } from '../shared/styledCardList';
import NewsCard from '../news-card/NewsCard';
import SavedCardTop from '../saved-card-top/SavedCardTop';
import { Section, Container } from './styledSavedCardList';

export default function SavedCardList({ savedArticles }) {
  return (
    <Section>
      <Container>
        <CardList>
          {savedArticles.map((article, index) => {
            return (
              <NewsCard key={index} article={article}>
                <SavedCardTop article={article} />
              </NewsCard>
            );
          })}
        </CardList>
      </Container>
    </Section>
  );
}
