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
// import { newsImages } from '../../utils/savedArticles';
// import notFound from '../../images/not-found.jpeg';
import notFound from '../../images/placeholder-logo.png';

export default function NewsCard({ children, article }) {
  const { title, description, shortText, publishedAt, source, url, urlToImage } = article;
  const [date, setDate] = React.useState('');
  const [adjustedTitle, setAdjustedTitle] = React.useState('');
  const [adjustedDescription, setAdjustedDescription] = React.useState('');
  // const [imagePlaceholder, setImagePlaceholder] = React.useState('');

  // const notFound = 'https://source.unsplash.com/random';
  // const notFound = 'https://picsum.photos/600';
  // const notFound = 'https://bit.ly/3HuXlZ3';

  // React.useEffect(() => {
  //   // this is such a complicated way of setting a
  //   // default image from an array of images
  //   setImagePlaceholder(newsImages[Math.floor(Math.random() * newsImages.length)]);
  // }, []);

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
      <Image image={urlToImage || notFound}>{children}</Image>
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
