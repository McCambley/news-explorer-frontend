import React from 'react';
import styled from 'styled-components';
import trash from '../../images/trash.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Keyword = styled.p``;
const DeleteButton = styled.button``;
const DeleteIcon = styled.img``;
export default function SavedCardTop({ article }) {
  return (
    <Container>
      <Keyword>{article.keyword}</Keyword>
      <DeleteButton type="button">
        <DeleteIcon src={trash} alt="delete"></DeleteIcon>
      </DeleteButton>
    </Container>
  );
}
