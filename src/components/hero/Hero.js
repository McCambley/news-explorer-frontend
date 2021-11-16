import React from 'react';
import { Section, Content, Title, Subtitle, Form, Input, Button } from './styledHero';

export default function Hero({ submitSearch, searchTerm, setSearchTerm }) {
  const [searchPlaceholder, setSearchPlaceholder] = React.useState('Enter topic');
  const [isSearchValid, setIsSearchValid] = React.useState(true);

  function handleBlur() {
    // reset placeholder display
    setSearchPlaceholder('Enter topic');
    setIsSearchValid(true);
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // validate input
    if (searchTerm === '') {
      // if input is empty, adjust placeholder text
      setSearchPlaceholder('Please enter a keyword');
      // set placeholder text to red
      setIsSearchValid(false);
      return;
    }
    submitSearch();
  }

  return (
    <Section>
      <Content>
        <Title>What's going on in the world?</Title>
        <Subtitle>
          Find the latest news on any topic and save them in your personal account.
        </Subtitle>
        <Form onSubmit={handleSubmit} onBlur={handleBlur} noValidate>
          <Input
            onChange={handleChange}
            placeholder={searchPlaceholder}
            $isValid={isSearchValid}
            value={searchTerm}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Content>
    </Section>
  );
}
