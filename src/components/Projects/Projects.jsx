import ProjectBox from 'components/ProjectBox';
import Section from 'components/Section';
import styledComponents from '../../commonStyles/CommonStyles';

const { SectionTitleStyled } = styledComponents;

const Projects = () => {
  return (
    <Section>
      <SectionTitleStyled id="projects">Projects</SectionTitleStyled>
      <ProjectBox />
    </Section>
  );
};

export default Projects;
