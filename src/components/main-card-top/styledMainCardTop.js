import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 40px;
`;
// TODO extend button to expand hover range
export const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  border: none;
  background: #ffffff;
  box-shadow: 0px 10px 22px rgba(59, 74, 116, 0.1);
  border-radius: 10px;
  margin-left: 6px;
`;
export const SignIn = styled(Button)`
  opacity: ${(props) => (props.shown ? '1' : '0')};
  padding: 12px 20px;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;

  line-height: 14px;
  transition: opacity 0.3s ease;
`;
export const SaveIcon = styled.img`
  width: 24px;
  opacity: 0.7;
  transition: 0.3s ease;

  /* &:hover {
    opacity: 1;
  } */
`;

export const SaveButton = styled(Button)`
  &:hover ${SaveIcon} {
    opacity: 1;
  }
`;
