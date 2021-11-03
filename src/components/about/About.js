import React from 'react';
import styled from 'styled-components/macro';

const Section = styled.section``;
const Container = styled.div``;
const Image = styled.img``;
const TextContent = styled.div``;
const Title = styled.h2``;
const Paragraph = styled.p``;

export default function About() {
  return (
    <Section>
      <Container>
        <Image />
        <TextContent>
          <Title>About the author</Title>
          <Paragraph>
            This block describes the project author. Here you should indicate your name, what you
            do, and which development technologies you know.
          </Paragraph>
          <Paragraph>
            You can also talk about your experience with Practicum, what you learned there, and how
            you can help potential customers.
          </Paragraph>
        </TextContent>
      </Container>
    </Section>
  );
}
