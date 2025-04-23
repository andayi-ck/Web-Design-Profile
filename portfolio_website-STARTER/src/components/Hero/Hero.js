import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        W. ENOCH MAGERO<hr></hr>
        <br></br>
      </SectionTitle>
      <SectionText>
        Determined and Ready to Help you in your Software development journey.
      </SectionText>

      <Button onClick={() => window.location = 'htpps://gmail.com'}>
        Know More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;