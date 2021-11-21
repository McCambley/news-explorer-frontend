import React from 'react';
import { CardList } from '../shared/styledCardList';
import SavedCard from '../saved-card/SavedCard';
import { Section, Container } from './styledSavedCardList';

export default function SavedCardList({ savedArticlesSorted, getSavedArticles }) {
  return (
    <Section>
      <Container>
        <CardList>
          {savedArticlesSorted.map((article, index) => {
            return <SavedCard key={index} article={article} getSavedArticles={getSavedArticles} />;
          })}
        </CardList>
      </Container>
    </Section>
  );
}
