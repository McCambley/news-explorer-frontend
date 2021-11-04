import React, { useState } from 'react';
import styled from 'styled-components';
import bookmark from '../../images/bookmark.svg';
import bookmarkBlue from '../../images/bookmark-blue.svg';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 40px;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  border: none;
  background: #ffffff;
  box-shadow: 0px 10px 22px rgba(59, 74, 116, 0.1);
  border-radius: 10px;
  margin-left: 6px;
`;
const SignIn = styled(Button)`
  opacity: ${(props) => (props.shown ? '1' : '0')};
  padding: 12px 20px;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  transition: opacity 0.3s ease;
`;
const BookmarkIcon = styled.img`
  width: 24px;
`;

export default function MainCardTop({ article, loggedIn }) {
  const [isShown, setIsShown] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <Container onMouseLeave={() => setIsShown(false)} onMouseEnter={() => setIsShown(true)}>
      {!loggedIn && <SignIn shown={isShown}>Sign in to save articles</SignIn>}
      <Button>
        <BookmarkIcon src={isSaved ? bookmarkBlue : bookmark} alt="bookmark" />
      </Button>
    </Container>
  );
}
