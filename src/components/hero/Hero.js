import React from 'react';
import { Section, Content, Title, Subtitle, Form, Input, Button } from './styledHero';

export default function Hero() {
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('Fetching news...');
  }
  return (
    <Section>
      <Content>
        <Title>What's going on in the world?</Title>
        <Subtitle>
          Find the latest news on any topic and save them in your personal account.
        </Subtitle>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Enter topic" required />
          <Button type="submit">Search</Button>
        </Form>
      </Content>
    </Section>
  );
}
