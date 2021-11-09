import { useState } from 'react';
import { Section, Title, Greeting, Keywords, List } from './styledSavedHero';

export default function SavedHero({ savedArticles }) {
  // updated with GET request later
  const [keywordList, setKeywordList] = useState('Nature, Yellowstone, and 2 others');

  return (
    <Section>
      <Title>Saved Articles</Title>
      <Greeting>Jake, you have {savedArticles.length} saved articles</Greeting>
      <Keywords>
        By keywords: <List>{keywordList}</List>
      </Keywords>
    </Section>
  );
}
