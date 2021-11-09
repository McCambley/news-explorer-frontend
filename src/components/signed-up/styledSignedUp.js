import styled from 'styled-components/macro';
import { Title, OptionButton } from '../shared/styledFormItems';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: ${(props) => (props.$how ? '400px' : '0')};
  visibility: ${(props) => (props.$how ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$how ? '1' : '0')};
  /* transition: opacity 0.3s ease, visibility 0.3s ease, max-height 0 linear; */
  transition: opacity 0.5s ease, visibility 0.5s ease;
  @media (max-width: 1024px) {
    //
  }
  @media (max-width: 768px) {
    //
  }
  @media (max-width: 480px) {
    //
  }
`;
export const SuccessTitle = styled(Title)`
  margin-bottom: 14px;
  @media (max-width: 1024px) {
    //
  }
  @media (max-width: 768px) {
    //
  }
  @media (max-width: 480px) {
    //
  }
`;
export const Option = styled(OptionButton)`
  font-family: 'Inter', sans-serif;
  text-align: left;
  margin-left: 0;
  font-size: 18px;
  line-height: 22px;
  @media (max-width: 1024px) {
    //
  }
  @media (max-width: 768px) {
    //
  }
  @media (max-width: 480px) {
    //
  }
`;
