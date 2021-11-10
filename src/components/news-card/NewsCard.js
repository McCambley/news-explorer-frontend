import React from 'react';
import { Card, Image, TextInfo, Date, Title, Text, Source } from './styledNewsCard';

export default function NewsCard({ children, article }) {
  const { keyword, title, text, shortText, date, source, link, image } = article;
  return (
    <Card>
      <Image image={image}>{children}</Image>
      <TextInfo>
        <Date>{date}</Date>
        <Title>{title}</Title>
        {/* TODO shorten text based on media query */}
        {/* <Text>{text}</Text> */}
        <Text>{shortText}</Text>
        <Source>{source}</Source>
      </TextInfo>
    </Card>
  );
}
