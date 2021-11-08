import React from 'react';
import notFound from '../../images/not-found.svg';
import NewsCardList from '../news-card-list/NewsCardList';
// import { articles } from '../../utils/savedArticles';
import {
  Section,
  Content,
  StatusContainer,
  StatusSpinner,
  StatusSubtext,
  StatusImage,
  StatusText,
} from './styledSearchResult';

export default function SearchResult({ loading, searchResults, failed, loggedIn }) {
  return (
    <Section>
      <Content>
        {/* loading spinner */}
        {loading && (
          <StatusContainer>
            <StatusSpinner />
            <StatusSubtext>Searching for news...</StatusSubtext>
          </StatusContainer>
        )}
        {/* search results */}
        {!loading && !failed && searchResults.length > 0 && (
          <NewsCardList searchResults={searchResults} loggedIn={loggedIn} />
        )}
        {/* nothing found */}
        {failed && (
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
