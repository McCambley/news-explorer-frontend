import React from 'react';
import { CardList } from '../shared/styledCardList';
// import NewsCard from '../news-card/NewsCard';
import SavedCard from '../saved-card/SavedCard';
import { Section, Container } from './styledSavedCardList';

export default function SavedCardList({ savedArticles, getSavedArticles }) {
  React.useEffect(() => {
    console.log('getting saved articles');
    getSavedArticles();
  }, []);
  return (
    <Section>
      <Container>
        <CardList>
          {savedArticles.map((article, index) => {
            return <SavedCard key={index} article={article} getSavedArticles={getSavedArticles} />;
          })}
        </CardList>
      </Container>
    </Section>
  );
}
