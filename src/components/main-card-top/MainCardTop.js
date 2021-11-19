import React, { useState } from 'react';
import bookmark from '../../images/bookmark.svg';
import bookmarkBlue from '../../images/bookmark-blue.svg';
import { Container, SignIn, SaveButton, SaveIcon } from './styledMainCardTop';
import { mainApi } from '../../utils/MainApi';
// import { newsImages } from '../../utils/savedArticles';

// import notFound from '../../images/not-found.jpeg';
import notFound from '../../images/placeholder-logo.png';

export default function MainCardTop({
  article,
  loggedIn,
  keyword,
  switchModals,
  savedArticles,
  getSavedArticles,
}) {
  const [isShown, setIsShown] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  // const [articleId, setArticleId] = useState(null);

  // const notFound = 'https://source.unsplash.com/random';
  // const notFound = 'https://picsum.photos/600';
  // const notFound = 'https://bit.ly/3HuXlZ3';

  // const notFound = newsImages[Math.floor(Math.random() * newsImages.length)];

  React.useEffect(() => {
    setIsSaved(savedArticles.some((item) => item.link === article.url));
    // TODO
    // Check if savedArticles array contains article.url. If it does, set isSaved to true.
    // On click, get saved articles and update saved articles
  }, [article.url, savedArticles]);

  function handleSaveClick() {
    // cancel save is user is not logged in
    if (!loggedIn) {
      return;
    }
    // save if user is logged in
    const { title, description, publishedAt, source, url, urlToImage } = article;
    if (!isSaved) {
      mainApi
        .saveArticle(
          keyword,
          title,
          description,
          publishedAt,
          source.name,
          url,
          urlToImage || notFound
        )
        .then((response) => {
          setIsSaved(true);
          getSavedArticles();
          // setArticleId(response.data._id);
        })
        .catch((error) => console.error(error));
    } else if (isSaved) {
      const articleInSavedArray = savedArticles.find((item) => item.link == article.url);
      mainApi
        .removeArticle(articleInSavedArray._id)
        .then((response) => {
          setIsSaved(false);
          getSavedArticles();
          // setArticleId(null);
        })
        .catch((error) => console.error(error));
    }
  }

  function handleContainerClick() {
    // show sign in if user clicks while not signed in
    if (!loggedIn) {
      switchModals('signin');
    }
  }

  return (
    <Container onMouseLeave={() => setIsShown(false)} onClick={handleContainerClick}>
      {!loggedIn && (
        <SignIn shown={isShown} type="button">
          Sign in to save articles
        </SignIn>
      )}
      <SaveButton
        $loggedIn={loggedIn}
        onClick={handleSaveClick}
        onMouseEnter={() => setIsShown(true)}
      >
        {/* I just added $isSaved as a prop below */}
        <SaveIcon $isSaved={isSaved} src={isSaved ? bookmarkBlue : bookmark} alt="bookmark" />
      </SaveButton>
    </Container>
  );
}
