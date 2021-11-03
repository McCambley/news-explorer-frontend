import styled from 'styled-components/macro';

export const Section = styled.footer`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 32px 104px 26px;
  max-width: 1440px;
`;
export const Copyright = styled.p`
  color: #b6bcbf;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;
export const Nav = styled.nav`
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(4, min-content);
`;

export const TextLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #1a1b22;
  text-decoration: none;
`;
export const IconLink = styled.a`
  display: block;
  background-image: url(${(props) => props.icon});
  width: 24px;
  height: 24px;
  background-position: center;
  background-size: cover;
`;
