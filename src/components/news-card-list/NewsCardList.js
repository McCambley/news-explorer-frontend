import React from 'react';
import NewsCard from '../news-card/NewsCard';
import MainCardTop from '../main-card-top/MainCardTop';
import { CardList } from '../shared/styledCardList';
import { Container, Heading, ShowMore } from './styledNewsCardList';

export default function NewsCardList({ searchResults, loggedIn, keyword }) {
  const [isShown, setIsShown] = React.useState(true);
  // initial display amount (6) will look good on a grid with 3, 2, or 1 columns
  const [displayAmount, setDisplayAmount] = React.useState(6);

  React.useEffect(() => {
    if (displayAmount >= searchResults.length) {
      setIsShown(false);
    }
  }, [displayAmount, searchResults]);

  function handleShowMore() {
    setDisplayAmount(displayAmount + 6);
  }

  return (
    <Container>
      <Heading>Search Results</Heading>
      <CardList>
        {searchResults.slice(0, displayAmount).map((article, index) => {
          return (
            <NewsCard key={index} article={article}>
              <MainCardTop loggedIn={loggedIn} keyword={keyword} article={article} />
            </NewsCard>
          );
        })}
      </CardList>
      {isShown && <ShowMore onClick={handleShowMore}>Show more</ShowMore>}
    </Container>
  );
}
