import React, { useState } from 'react';
import trash from '../../images/trash.svg';
import { mainApi } from '../../utils/MainApi';
import {
  Container,
  Keyword,
  DeleteContainer,
  DeleteTooltip,
  DeleteButton,
  DeleteIcon,
} from './styledSavedCardTop';

export default function SavedCardTop({ article, getSavedArticles }) {
  const [isShown, setIsShown] = useState(false);

  function handleDeleteClick() {
    mainApi
      .removeArticle(article._id)
      .then((response) => {
        getSavedArticles();
      })
      .catch((error) => console.error(error));
  }

  return (
    <Container>
      <Keyword shown={isShown} type="button">
        {article.keyword.split(' ').length > 2
          ? `${article.keyword.split(' ').slice(0, 2).join(' ')}...`
          : `${article.keyword}`}
      </Keyword>
      <DeleteContainer onMouseLeave={() => setIsShown(false)} onClick={handleDeleteClick}>
        <DeleteTooltip shown={isShown} type="button">
          Remove from saved
        </DeleteTooltip>
        <DeleteButton type="button" onMouseEnter={() => setIsShown(true)}>
          <DeleteIcon src={trash} alt="delete"></DeleteIcon>
        </DeleteButton>
      </DeleteContainer>
    </Container>
  );
}
