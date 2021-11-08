import React from 'react';
import { Card, Image, TextInfo, Date, Title, Text, Source } from './styledNewsCard';

export default function NewsCard({ children, article }) {
  const { keyword, title, text, date, source, link, image } = article;
  return (
    <Card>
      <Image image={image}>{children}</Image>
      <TextInfo>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Source>{source}</Source>
      </TextInfo>
    </Card>
  );
}
