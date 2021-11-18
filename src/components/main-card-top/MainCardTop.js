import React, { useState } from 'react';
import bookmark from '../../images/bookmark.svg';
import bookmarkBlue from '../../images/bookmark-blue.svg';
import { Container, SignIn, SaveButton, SaveIcon } from './styledMainCardTop';
import { mainApi } from '../../utils/MainApi';
// import { newsImages } from '../../utils/savedArticles';

// import notFound from '../../images/not-found.jpeg';
import notFound from '../../images/placeholder-logo.png';

export default function MainCardTop({ article, loggedIn, keyword }) {
  const [isShown, setIsShown] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [articleId, setArticleId] = useState(null);

  // const notFound = 'https://source.unsplash.com/random';
  // const notFound = 'https://picsum.photos/600';
  // const notFound = 'https://bit.ly/3HuXlZ3';

  // const notFound = newsImages[Math.floor(Math.random() * newsImages.length)];

  React.useEffect(() => {
    // TODO
    // Check if savedArticles array contains article.url. If it does, set isSaved to true.
    // On click, get saved articles and update saved articles
  }, []);

  console.log(article.urlToImage || notFound);
  function handleSaveClick() {
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
        {/* I just added $isSaved as a prop below */}
        <SaveIcon $isSaved={isSaved} src={isSaved ? bookmarkBlue : bookmark} alt="bookmark" />
      </SaveButton>
    </Container>
  );
}
