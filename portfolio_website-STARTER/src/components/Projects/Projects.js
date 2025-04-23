

/*
import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { GridContainer } from './ProjectsStyles';

const Projects = () => (
  <div>
    Projects

    <Section nopadding id="projects">
    <SectionDivider>
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(( id, image, title, description, tags, source, visit ) => (
          <BlogCard key={id}>
            <Img src={image}></Img>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
          </BlogCard>
          ))}
      </GridContainer>
    </SectionDivider>
  </Section>

  </div>
);

export default Projects;


*/

import React from 'react';

import { projects } from '../../constants/constants';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Img, Tag, TagList, TitleContent, UtilityList } from './ProjectsStyles';
const Projects = () => (
    <div>
  
      <Section nopadding id="projects">
        <SectionDivider></SectionDivider>
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>

          {projects.map(({ id, image, title, description, tags, source, visit}) => (
            <BlogCard key={id}>
              <Img src={image}></Img>
              <TitleContent>

                <HeaderThree title>{title}</HeaderThree>
              </TitleContent>
              <CardInfo>{description}</CardInfo>

              <br></br>
              <br></br>
              <div>
                <TitleContent>Stack</TitleContent>
                <TitleContent>{tags}</TitleContent>
                <TagList>
                  {tags && tags.map(({ tag, i}) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>

              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={source}>Source</ExternalLinks>
              </UtilityList>


            </BlogCard>
          ))}
        </GridContainer>
      
    </Section>

  </div>
);

export default Projects;






