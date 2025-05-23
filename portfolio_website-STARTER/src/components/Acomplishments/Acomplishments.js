import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';



//you can however change the stats below to suit your needs
const data = [
  { number: 20 + '+', text: 'Open Source Projects'},
  { number: 1000 + '+', text: 'Students', },
  { number: 1900 + '+', text: 'Github Followers', },
  { number: 5000 + '+', text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Our Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
