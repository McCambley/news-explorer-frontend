import React, { useState } from 'react';
import bookmark from '../../images/bookmark.svg';
import bookmarkBlue from '../../images/bookmark-blue.svg';
import { Container, SignIn, SaveButton, SaveIcon } from './styledMainCardTop';
import { mainApi } from '../../utils/MainApi';

export default function MainCardTop({ article, loggedIn, keyword }) {
  const [isShown, setIsShown] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [articleId, setArticleId] = useState(null);

  function handleSaveClick() {
    const { title, description, publishedAt, source, url, urlToImage } = article;
    if (!isSaved) {
      mainApi
        .saveArticle(keyword, title, description, publishedAt, source.name, url, urlToImage)
        .then((response) => {
          console.log(response.data._id);
          setIsSaved(true);
          setArticleId(response.data._id);
        })
        .catch((error) => console.error(error));
    } else if (isSaved) {
      mainApi
        .removeArticle(articleId)
        .then((response) => {
          console.log(response);
          setIsSaved(false);
          setArticleId(null);
        })
        .catch((error) => console.error(error));
    } else {
      console.log('Doing neither');
    }
  }

  return (
    <Container onMouseLeave={() => setIsShown(false)}>
      {!loggedIn && (
        <SignIn shown={isShown} type="button">
          Sign in to save articles
        </SignIn>
      )}
      <SaveButton onClick={handleSaveClick} onMouseEnter={() => setIsShown(true)}>
        <SaveIcon src={isSaved ? bookmarkBlue : bookmark} alt="bookmark" />
      </SaveButton>
    </Container>
  );
}
