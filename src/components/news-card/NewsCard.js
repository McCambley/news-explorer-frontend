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
        console.loe('oops');
    }
    return `${newDate[0]} ${newDate[1]}, ${newDate[2]}`;
  }

  React.useEffect(() => {
    const newDate = convertDate(publishedAt);
    setDate(newDate);
    const titleArray = title.split(' ');
    setAdjustedTitle(
      titleArray.length > 6 ? `${titleArray.slice(0, 6).join(' ')}...` : `${titleArray.join(' ')}`
    );
    const descriptionArray = description.split(' ');
    console.log(descriptionArray);
    setAdjustedDescription(
      descriptionArray.length > 30
        ? `${descriptionArray.slice(0, 30).join(' ')}... (read more)`
        : `${descriptionArray.join(' ')}`
    );
    // `${title.substring(0, 100)}...`
    // `${description.substring(0, 200)}${
    //   description.length > 175 ? '... (read more)' : ''
    // }`
  }, []);
  return (
    <Card>
      <Image image={urlToImage}>{children}</Image>
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
