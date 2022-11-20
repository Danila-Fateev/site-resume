import Container from 'components/Container';
import styledComponents from './ProjectBox.styled';

const {
  ProjectBoxStyled,
  ProjectLabel,
  ProjectInput,
  ProjectTextHeading,
  ProjectText,
  ProjectTextBox,
} = styledComponents;

const ProjectBox = () => {
  return (
    <Container>
      <ProjectBoxStyled>
        <div>
          <ProjectLabel>
            IceCream
            <ProjectInput name="myProject" type="radio" value="IceCream" />
          </ProjectLabel>

          <ProjectLabel>
            Filmoteka
            <ProjectInput name="myProject" type="radio" value="Filmoteka" />
          </ProjectLabel>
        </div>

        <div>
          <ProjectTextBox></ProjectTextBox>
        </div>
      </ProjectBoxStyled>
    </Container>
  );
};

export default ProjectBox;
