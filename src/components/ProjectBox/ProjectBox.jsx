import Container from 'components/Container';
import { useEffect } from 'react';
import styledComponents from './ProjectBox.styled';

const {
  ProjectBoxStyled,
  ProjectLabel,
  ProjectInput,
  ProjectTextHeading,
  ProjectText,
  ProjectTextBox,
  ProjectLinks,
} = styledComponents;

const ProjectBox = () => {
  const chooseProject = e => {
    if (e) {
      const projectInput = e.currentTarget;
      projectInput.parentElement.style.background = '#0EC5FF';
      projectInput.parentElement.style.color = '#000000';

      const projectInfo = document.querySelectorAll('#projectInfo');
      const chosenProjectInfo = [...projectInfo].find(
        el => el.getAttribute('name') === projectInput.value
      );
      const otherProjectInfo = [...projectInfo].filter(
        el => el.getAttribute('name') !== projectInfo.name
      );

      otherProjectInfo.forEach(el => (el.style.position = 'absolute'));

      chosenProjectInfo.style.position = 'static';

      [...document.querySelectorAll('#projectInput')]
        .filter(el => !el.checked)
        .forEach(el => {
          el.parentElement.style.backgroundColor = '#141F47';
          el.parentElement.style.color = '#f8f8f8';
        });

      return;
    }

    const projectInput = document.querySelectorAll('#projectInput');
    const checkedInput = [...projectInput].find(el => el.checked);
    checkedInput.parentElement.style.backgroundColor = '#0EC5FF';

    const projectInfo = document.querySelectorAll('#projectInfo');
    const chosenProjectInfo = [...projectInfo].find(
      el => el.getAttribute('name') === checkedInput.value
    );

    chosenProjectInfo.style.display = 'block';
    chosenProjectInfo.style.position = 'static';
  };

  useEffect(() => {
    chooseProject(null);
  }, []);

  return (
    <Container>
      <ProjectBoxStyled>
        <div>
          <ProjectLabel id="projectLabel">
            IceCream
            <ProjectInput
              name="myProject"
              type="radio"
              value="IceCream"
              id="projectInput"
              defaultChecked={true}
              onChange={chooseProject}
            />
          </ProjectLabel>

          <ProjectLabel id="projectLabel">
            Filmoteka
            <ProjectInput
              name="myProject"
              type="radio"
              value="Filmoteka"
              id="projectInput"
              onChange={chooseProject}
            />
          </ProjectLabel>
        </div>

        <ProjectTextBox name="IceCream" id="projectInfo">
          <ProjectTextHeading>Description:</ProjectTextHeading>
          <ProjectText>
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </ProjectText>
          <div style={{ textAlign: 'end' }}>
            <ProjectLinks
              href="https://github.com/Danila-Fateev/site-resume"
              target="_blank"
            >
              Github
            </ProjectLinks>
            <ProjectLinks
              href="https://github.com/Danila-Fateev"
              target="_blank"
            >
              Project
            </ProjectLinks>
          </div>
        </ProjectTextBox>

        <ProjectTextBox name="Filmoteka" id="projectInfo">
          <ProjectTextHeading>NOTDescription:</ProjectTextHeading>
          <ProjectText>
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </ProjectText>
          <div style={{ textAlign: 'end' }}>
            <ProjectLinks
              href="https://github.com/Danila-Fateev/site-resume"
              target="_blank"
            >
              Github
            </ProjectLinks>
            <ProjectLinks
              href="https://github.com/Danila-Fateev"
              target="_blank"
            >
              Project
            </ProjectLinks>
          </div>
        </ProjectTextBox>
      </ProjectBoxStyled>
    </Container>
  );
};

export default ProjectBox;
