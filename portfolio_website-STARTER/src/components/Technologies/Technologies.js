/*import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';



const Technologies = () =>  (

  <Section id="tech">
    <SectionDivider></SectionDivider>
    <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in <br></br>
        Software Development and Design.
      </SectionText>

      <List>
        <ListItem>
          <DiReact size="3rem"></DiReact>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br></br>
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiFirebase size="3rem"></DiFirebase>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br></br>
              Node and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiZend size="3rem"></DiZend>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br></br>
              tools like Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;


*/


import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>

    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        
        <picture>
          <DiFirebase size="3rem" />
        </picture>

        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>

        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;