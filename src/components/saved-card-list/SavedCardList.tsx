import React from 'react';
import { CardList } from '../shared/styledCardList';
import SavedCard from '../saved-card/SavedCard';
import { Section, Container } from './styledSavedCardList';
import { SavedArticle } from '../../types/types';

type Props = {
  savedArticlesSorted: SavedArticle[];
  getSavedArticles: Function;
  setSearchTerm: Function;
  submitSearch: Function;
};

export default function SavedCardList({
  savedArticlesSorted,
  getSavedArticles,
  setSearchTerm,
  submitSearch,
}: Props) {
  return (
    <Section>
      <Container>
        <CardList>
          {savedArticlesSorted.map((article, index) => {
            return (
              <SavedCard
                key={index}
                article={article}
                getSavedArticles={getSavedArticles}
                setSearchTerm={setSearchTerm}
                submitSearch={submitSearch}
              />
            );
          })}
        </CardList>
      </Container>
    </Section>
  );
}
