import React from 'react';
import { CardList } from '../shared/styledCardList';
import NewsCard from '../news-card/NewsCard';
import SavedCardTop from '../saved-card-top/SavedCardTop';
import styled from 'styled-components/macro';

const Section = styled.section`
  background: #f5f6f7;
`;

const Container = styled.div`
  padding: 62px 106px;
  max-width: 1440px;
  margin: 0 auto;
`;

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
