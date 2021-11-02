import React from 'react';
import styled from 'styled-components';
import hero from '../../images/hero.png';

const Section = styled.section`
  background-image: url(${hero});
  background-position: center;
  background-size: cover;
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const Title = styled.h1`
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 60px;
  line-height: 64px;
  color: #fff;
  width: 100%;
  text-align: left;
  padding-bottom: 32px;
`;
const Subtitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  width: 100%;
  padding-bottom: 88px;
`;

const Form = styled.form`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  display: flex;
  border-radius: 100px;
  overflow: hidden;
  background-color: #fff;
  outline: none;
  border: 1px solid #d1d2d6;
  backdrop-filter: blur(8px);
`;
const Input = styled.input`
  width: 100%;
  padding: 21px 24px;
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;
const Button = styled.button`
  /* width: 100%; */
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  padding: 20px 56px;
  background-color: #2f71e5;
  color: #fff;
  border-radius: 100px 0 0 100px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 5px 15px rgba(14, 26, 57, 0.2);
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #347eff;
  }
  &:focus {
    background-color: #2a65cc;
  }
`;

export default function Hero() {
  return (
    <Section>
      <Content>
        <Title>What's going on in the world?</Title>
        <Subtitle>
          Find the latest news on any topic and save them in your personal account.
        </Subtitle>
        <Form>
          <Input placeholder="Enter topic" />
          <Button>Search</Button>
        </Form>
      </Content>
    </Section>
  );
}
