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
`;
export const Image = styled.img`
  max-width: 100%;
  border-radius: 50%;
`;
export const TextContent = styled.div``;
export const Title = styled.h2`
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  margin-bottom: 24px;
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
`;
