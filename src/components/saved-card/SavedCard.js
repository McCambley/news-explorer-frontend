import React from 'react';
import SavedCardTop from '../saved-card-top/SavedCardTop';
import {
  Card,
  CardLink,
  Image,
  TextInfo,
  PublishDate,
  Title,
  Text,
  Source,
} from '../shared/styledCard';
import { convertDate } from '../../utils/functions';

export default function SavedCard({ children, article }) {
  const { date, image, keyword, link, owner, source, text, title } = article;
  const [publishDate, setPublishDate] = React.useState('');
  const [adjustedTitle, setAdjustedTitle] = React.useState('');
  const [adjustedDescription, setAdjustedDescription] = React.useState('');

  React.useEffect(() => {
    const newDate = convertDate(date);
    setPublishDate(newDate);
    const titleArray = title ? title.split(' ') : ['Title', 'not', 'available'];
    setAdjustedTitle(
      titleArray.length > 6 ? `${titleArray.slice(0, 12).join(' ')}...` : `${titleArray.join(' ')}`
    );
    const descriptionArray = text ? text.split(' ') : ['Content', 'not', 'available'];
    setAdjustedDescription(
      descriptionArray.length > 30
        ? `${descriptionArray.slice(0, 40).join(' ')}...`
        : `${descriptionArray.join(' ')}`
    );
  }, [date, text, title]);

  return (
    <Card>
      <Image image={image}>
        <SavedCardTop article={article} />
      </Image>
      <CardLink href={link} rel="noreferrer" target="_blank">
        <TextInfo>
          <PublishDate>{publishDate}</PublishDate>
          <Title>{adjustedTitle}</Title>
          <Text>{adjustedDescription}</Text>
          <Source>{source}</Source>
        </TextInfo>
      </CardLink>
    </Card>
  );
}
