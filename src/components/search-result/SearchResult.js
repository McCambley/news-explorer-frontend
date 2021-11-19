import React from 'react';
import notFound from '../../images/not-found.svg';
import NewsCardList from '../news-card-list/NewsCardList';
import {
  Section,
  Content,
  StatusContainer,
  StatusSpinner,
  StatusSubtext,
  StatusImage,
  StatusText,
} from './styledSearchResult';

export default function SearchResult({
  isLoading,
  searchResults,
  isNothing,
  loggedIn,
  keyword,
  switchModals,
  savedArticles,
  getSavedArticles,
}) {
  return (
    <Section>
      <Content>
        {/* loading spinner */}
        {isLoading && (
          <StatusContainer>
            <StatusSpinner />
            <StatusSubtext>Searching for news...</StatusSubtext>
          </StatusContainer>
        )}
        {/* search results */}
        {!isLoading && !isNothing && searchResults.length > 0 && (
          <NewsCardList
            searchResults={searchResults}
            loggedIn={loggedIn}
            keyword={keyword}
            switchModals={switchModals}
            savedArticles={savedArticles}
            getSavedArticles={getSavedArticles}
          />
        )}
        {/* nothing found */}
        {isNothing && (
          <StatusContainer>
            <StatusImage src={notFound} alt="Not found" />
            <StatusText>Nothing Found</StatusText>
            <StatusSubtext>Sorry, but nothing matched your search terms.</StatusSubtext>
          </StatusContainer>
        )}
      </Content>
    </Section>
  );
}
