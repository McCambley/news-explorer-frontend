import React from 'react';
import NewsCard from '../news-card/NewsCard';
import { CardList } from '../shared/styledCardList';
import { Container, Heading, ShowMore } from './styledNewsCardList';

export default function NewsCardList({
  searchResults,
  loggedIn,
  keyword,
  switchModals,
  savedArticles,
  getSavedArticles,
}) {
  const [isShown, setIsShown] = React.useState(true);
  // initial display amount (6) will look good on a grid with 3, 2, or 1 columns
  const [displayAmount, setDisplayAmount] = React.useState(6);

  // expand the display of articles shown
  function handleShowMore() {
    setDisplayAmount(displayAmount + 6);
  }

  // hide show more button if there are no more articles to display
  React.useEffect(() => {
    if (displayAmount >= searchResults.length) {
      setIsShown(false);
    }
  }, [displayAmount, searchResults]);

  return (
    <Container>
      <Heading>Search Results</Heading>
      <CardList>
        {searchResults.slice(0, displayAmount).map((article, index) => {
          return (
            <NewsCard
              key={index}
              article={article}
              loggedIn={loggedIn}
              keyword={keyword}
              switchModals={switchModals}
              savedArticles={savedArticles}
              getSavedArticles={getSavedArticles}
            />
          );
        })}
      </CardList>
      {isShown && <ShowMore onClick={handleShowMore}>Show more</ShowMore>}
    </Container>
  );
}
