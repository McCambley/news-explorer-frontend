import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
`;
export const DeleteContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  border: none;
  background: #ffffff;
  box-shadow: 0px 10px 22px rgba(59, 74, 116, 0.1);
  border-radius: 10px;
  margin-left: 6px;
  color: #000000;
`;

export const Keyword = styled(Button)`
  padding: 8px 22px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

export const DeleteTooltip = styled(Button)`
  opacity: ${(props) => (props.shown ? '1' : '0')};
  padding: 12px 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  transition: opacity 0.3s ease;
`;

export const DeleteIcon = styled.img`
  width: 24px;
  opacity: 0.7;
  transition: 0.3s ease;

  /* &:hover {
  } */
`;

export const DeleteButton = styled(Button)`
  &:hover ${DeleteIcon} {
    opacity: 1;
  }
`;
