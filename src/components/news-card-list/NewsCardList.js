import React from 'react';
import NewsCard from '../news-card/NewsCard';
import MainCardTop from '../main-card-top/MainCardTop';
import { CardList } from '../shared/styledCardList';
import { Container, Heading, ShowMore } from './styledNewsCardList';

export default function NewsCardList({ searchResults, loggedIn }) {
  const [showMoreDisabled, setShowMoreDisabled] = React.useState(false);
  // const [displayedResults, setDisplayedResults] = React.useState(searchResults);
  const [displayAmount, setDisplayAmount] = React.useState(3);

  // React.useEffect(() => {
  //   if (searchResults.length <= 3) {
  //     setShowMoreDisabled(true);
  //   }
  // }, [searchResults]);

  React.useEffect(() => {
    if (displayAmount >= searchResults.length) {
      setShowMoreDisabled(true);
    }
  }, [displayAmount, handleShowMore, searchResults]);

  function handleShowMore() {
    setDisplayAmount(displayAmount + 3);
  }

  return (
    <Container>
      <Heading>Search Results</Heading>
      <CardList>
        {searchResults.slice(0, displayAmount).map((article, index) => {
          return (
            <NewsCard key={index} article={article}>
              <MainCardTop loggedIn={loggedIn} article={article} />
            </NewsCard>
          );
        })}
      </CardList>
      <ShowMore onClick={handleShowMore} disabled={showMoreDisabled}>
        Show more
      </ShowMore>
    </Container>
  );
}
