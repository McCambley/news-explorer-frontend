import React, { useState } from 'react';
import bookmark from '../../images/bookmark.svg';
import bookmarkBlue from '../../images/bookmark-blue.svg';
import { Container, SignIn, SaveButton, SaveIcon } from './styledMainCardTop';

export default function MainCardTop({ article, loggedIn }) {
  const [isShown, setIsShown] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <Container onMouseLeave={() => setIsShown(false)} onMouseEnter={() => setIsShown(true)}>
      {!loggedIn && (
        <SignIn shown={isShown} type="button">
          Sign in to save articles
        </SignIn>
      )}
      <SaveButton onClick={() => setIsSaved(!isSaved)}>
        <SaveIcon src={isSaved ? bookmarkBlue : bookmark} alt="bookmark" />
      </SaveButton>
    </Container>
  );
}
