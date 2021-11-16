import React from 'react';
import {
  Card,
  CardLink,
  Image,
  TextInfo,
  PublishDate,
  Title,
  Text,
  Source,
} from './styledNewsCard';

export default function NewsCard({ children, article }) {
  const { title, description, shortText, publishedAt, source, url, urlToImage } = article;
  const [date, setDate] = React.useState('');
  const [adjustedTitle, setAdjustedTitle] = React.useState('');
  const [adjustedDescription, setAdjustedDescription] = React.useState('');

  const placeholderUrl =
    'https://images.unsplash.com/photo-1623039405147-547794f92e9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=826&q=80';
  // Yikes
  function convertDate(oldDate) {
    const newDate = new Date(oldDate).toString().split(' ').slice(1, 4);
    switch (newDate.shift()) {
      case 'Jan':
        newDate.unshift('January');
        break;
      case 'Feb':
        newDate.unshift('February');
        break;
      case 'Mar':
        newDate.unshift('March');
        break;
      case 'Apr':
        newDate.unshift('April');
        break;
      case 'May':
        newDate.unshift('May');
        break;
      case 'Jun':
        newDate.unshift('June');
        break;
      case 'Jul':
        newDate.unshift('July');
        break;
      case 'Aug':
        newDate.unshift('August');
        break;
      case 'Sep':
        newDate.unshift('September');
        break;
      case 'Oct':
        newDate.unshift('October');
        break;
      case 'Nov':
        newDate.unshift('November');
        break;
      case 'Dec':
        newDate.unshift('December');
        break;
      default:
        console.log('oops');
    }
    return `${newDate[0]} ${newDate[1]}, ${newDate[2]}`;
  }

  React.useEffect(() => {
    const newDate = convertDate(publishedAt);
    setDate(newDate);
    const titleArray = title ? title.split(' ') : ['Title', 'not', 'available'];
    setAdjustedTitle(
      titleArray.length > 6 ? `${titleArray.slice(0, 12).join(' ')}...` : `${titleArray.join(' ')}`
    );
    const descriptionArray = description ? description.split(' ') : ['Content', 'not', 'available'];
    setAdjustedDescription(
      descriptionArray.length > 30
        ? `${descriptionArray.slice(0, 40).join(' ')}...`
        : `${descriptionArray.join(' ')}`
    );
    // `${title.substring(0, 100)}...`
    // `${description.substring(0, 200)}${
    //   description.length > 175 ? '... (read more)' : ''
    // }`
  }, []);
  return (
    <Card>
      <Image image={urlToImage || placeholderUrl}>{children}</Image>
      <CardLink href={url} rel="noreferrer" target="_blank">
        <TextInfo>
          <PublishDate>{date}</PublishDate>
          <Title>{adjustedTitle}</Title>
          {/* TODO shorten text based on media query */}
          {/* <Text>{text}</Text> */}
          <Text>{adjustedDescription}</Text>
          <Source>{source.name}</Source>
        </TextInfo>
      </CardLink>
    </Card>
  );
}
