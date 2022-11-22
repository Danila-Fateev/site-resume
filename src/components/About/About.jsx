import styledComponents from '../../commonStyles/CommonStyles';
import AboutBox from 'components/AboutBox';
import Section from 'components/Section';
const { SectionTitleStyled } = styledComponents;

const About = () => {
  return (
    <Section>
      <SectionTitleStyled id="about" style={{ marginBottm: '45px' }}>
        About
      </SectionTitleStyled>
      <AboutBox />
    </Section>
  );
};

export default About;
