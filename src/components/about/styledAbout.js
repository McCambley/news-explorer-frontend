import styled from 'styled-components/macro';

export const Section = styled.section`
  display: grid;
  gap: 56px;
  grid-template-columns: 4fr 6fr;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: 80px 104px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    //
    padding: 40px;
    gap: 32px;
  }
  @media (max-width: 768px) {
    //
  }
  @media (max-width: 480px) {
    //
    grid-template-columns: 1fr;
  }
`;
export const Image = styled.img`
  max-width: 100%;
  border-radius: 50%;
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
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding-top: 40px;
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
export const Title = styled.h2`
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  margin-bottom: 24px;
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
export const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
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
