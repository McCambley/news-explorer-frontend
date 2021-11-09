import styled from 'styled-components/macro';

export const Card = styled.article`
  background-color: #ffffff;
  transition: box-shadow 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  display: grid;
  grid-auto-rows: 1fr;
  &:hover {
    box-shadow: 0 8px 40px -4px rgba(8, 29, 45, 0.1);
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
export const Image = styled.div`
  display: flex;
  background-image: url(${(props) => props.image});
  padding: 24px;
  background-position: center;
  background-size: cover;
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
export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px;
  min-height: 100%;
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
export const Date = styled.p`
  margin-bottom: 12px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #b6bcbf;
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
export const Title = styled.h3`
  margin-bottom: 16px;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;
  color: #1a1b22;
  min-height: ${(2 * 30) / 26}em;
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
export const Text = styled.p`
  /* display: -webkit-box; */

  margin-bottom: auto;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #1a1b22;
  min-height: 5em;
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
export const Source = styled.p`
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  justify-self: flex-end;
  color: #b6bcbf;
  /* identical to box height, or 125% */

  letter-spacing: 0.4px;
  text-transform: uppercase;
  padding-top: 18px;
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
