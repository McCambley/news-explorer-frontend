import React from 'react';
import { Section, Content, Title, Subtitle, Form, Input, Button } from './styledHero';

export default function Hero({
  submitSearch,
  searchPlaceholder,
  setSearchPlaceholder,
  searchTerm,
  setSearchTerm,
}) {
  function handleBlur() {
    setSearchPlaceholder('Enter topic');
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <Section>
      <Content>
        <Title>What's going on in the world?</Title>
        <Subtitle>
          Find the latest news on any topic and save them in your personal account.
        </Subtitle>
        <Form onSubmit={submitSearch} onBlur={handleBlur} noValidate>
          <Input onChange={handleChange} placeholder={searchPlaceholder} value={searchTerm} />
          <Button type="submit">Search</Button>
        </Form>
      </Content>
    </Section>
  );
}
