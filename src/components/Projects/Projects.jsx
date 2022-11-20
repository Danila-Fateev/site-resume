import ProjectBox from 'components/ProjectBox';
import Section from 'components/Section';
import styledComponents from './Projects.styled';

const { ProjectTitle } = styledComponents;

const Projects = () => {
  return (
    <Section>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectBox />
    </Section>
  );
};

export default Projects;
