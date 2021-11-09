import * as styled from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = styled.createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
  }
  h1 {
    margin: 0;
  }
  h2 {
    margin: 0;
  }
  h3 {
    margin: 0;
  }
  h5 {
    margin: 0;
  }
  h6 {
    margin: 0;
  }
  p {
    margin: 0;
  }
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

export default GlobalStyles;
