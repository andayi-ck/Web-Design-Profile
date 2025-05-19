/*
import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;


*/


import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 200px; /* Consider if this fixed height is always best or if aspect-ratio is needed */
  object-fit: cover;
  overflow: hidden;
  border-top-left-radius: 10px; /* Match card radius */
  border-top-right-radius: 10px; /* Match card radius */
  /* Optional: if you want a border at the bottom of the image only */
  /* border-bottom: 2px solid ${(props) => props.theme.colors.accent1 || '#d0bb57'}; */
`;

export const GridContainer = styled.section`
  display: grid;
  /* Default for smaller screens - let auto-fill decide, potentially 1 or 2 columns */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 3rem;
  place-items: start stretch; /* Align items to start vertically, stretch horizontally to fill height */
  column-gap: 2.5rem;
  row-gap: 3rem;

  /* Media query for small screens (mobile) */
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center items when in single column flex layout */
    padding: 2rem 1rem;
    padding-bottom: 0;
    row-gap: 2.5rem; /* Use row-gap for flex column */
  }

  /* Media query for medium screens - explicitly set to 2 columns */
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    padding: 3rem 1.5rem;
  }

  /* Media query for large screens - explicitly set to 3 columns */
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;


export const BlogCard = styled.div`
  background: ${(props) => props.theme.colors.background2 || 'rgba(23, 31, 50, 0.95)'}; /* Darker, slightly distinct card bg */
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35); /* Refined shadow */
  text-align: left;
  width: 100%;
  /* max-width: 380px; /* Let grid columns define max width effectively */
  min-height: 460px; /* Adjusted min-height for content */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; /* Content inside will manage its own spacing */
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out; /* Smoother ease-out */
  border: 1px solid ${(props) => props.theme.colors.stroke || 'rgba(255, 255, 255, 0.08)'}; /* Subtle border */
  overflow: hidden; /* Ensure nothing spills out of rounded corners */

  &:hover {
    transform: translateY(-8px) scale(1.02); /* More noticeable hover */
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.45);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    max-width: 450px; /* Max width for single column on mobile */
    height: auto; /* Allow height to adjust to content */
    min-height: 0; /* Reset min-height for mobile */
    margin-bottom: 2.5rem; /* Spacing in flex column mode */
    text-align: center; /* Center text content for mobile */
  }
`;

export const CardContentWrapper = styled.div`
  padding: 1.5rem; /* Main padding for content inside the card, below the image */
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Allows this wrapper to take available space */
  justify-content: space-between; /* Pushes buttons to bottom if content is short */
`;

export const TitleContent = styled.div`
  text-align: center; /* Keep title centered */
  width: 100%;
  margin-bottom: 0.75rem; /* Space after title block */
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.header || '#e1eaf2'}; /* Brighter header color */
  /* padding: 0.5rem 0; */
  font-size: ${(props) => (props.title ? '1.6rem' : '1.4rem')}; /* Main title on card */
  line-height: 1.3;
  word-wrap: break-word;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.title ? '1.75rem' : '1.5rem')};
  }
`;

export const CardInfo = styled.p`
  color: ${(props) => props.theme.colors.textSecondary || 'hsl(210, 15%, 80%)'};
  font-size: 0.9rem;
  line-height: 1.75; /* Further increased for better readability */
  text-align: left;
  margin-bottom: 1.5rem; /* Space before Stack/Tags section */
  /* flex-grow: 1; /* Let CardContentWrapper handle overall spacing */

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.95rem;
    text-align: center;
    padding: 0 0.5rem; /* Less horizontal padding on mobile if centered */
  }
`;

export const StackSection = styled.div`
  margin-bottom: 1.5rem; /* Space before buttons */
`;

