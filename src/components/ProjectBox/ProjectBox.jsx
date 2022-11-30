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

          <ProjectLabel id="projectLabel">
            Petly
            <ProjectInput
              name="myProject"
              type="radio"
              value="Petly"
              id="projectInput"
              onChange={chooseProject}
            />
          </ProjectLabel>
        </div>

        <ProjectTextBox name="IceCream" id="projectInfo">
          <ProjectTextHeading>Description:</ProjectTextHeading>
          <ProjectText>
            An IceCream company site that provides information about how
            company's ice cream made, company's products and info about contact.
            Also you can buy their goods and see their location.
          </ProjectText>
          <div style={{ textAlign: 'end' }}>
            <ProjectLinks
              href="https://github.com/Anastasiia-Tarasiuk/ice-cream-page"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.3056 0.388885C9.08674 0.388885 0 9.47562 0 20.6944C0 29.6796 5.81247 37.2689 13.8839 39.9593C14.8992 40.137 15.2799 39.5278 15.2799 38.9948C15.2799 38.5126 15.2545 36.9135 15.2545 35.2129C10.1528 36.152 8.83292 33.9692 8.42681 32.827C8.19837 32.2432 7.20847 30.4411 6.34549 29.9589C5.63479 29.5781 4.61951 28.639 6.3201 28.6136C7.91917 28.5882 9.06135 30.0858 9.44208 30.6949C11.2696 33.7661 14.1885 32.9032 15.3561 32.3701C15.5337 31.0503 16.0668 30.1619 16.6506 29.6543C12.1326 29.1466 7.41153 27.3953 7.41153 19.6284C7.41153 17.4202 8.19837 15.5927 9.49285 14.1713C9.28979 13.6636 8.5791 11.5823 9.6959 8.79031C9.6959 8.79031 11.3965 8.25729 15.2799 10.8716C16.9044 10.4148 18.6303 10.1863 20.3563 10.1863C22.0823 10.1863 23.8083 10.4148 25.4327 10.8716C29.3161 8.23191 31.0167 8.79031 31.0167 8.79031C32.1335 11.5823 31.4228 13.6636 31.2198 14.1713C32.5143 15.5927 33.3011 17.3948 33.3011 19.6284C33.3011 27.4207 28.5547 29.1466 24.0367 29.6543C24.7728 30.2888 25.4073 31.5071 25.4073 33.4108C25.4073 36.1267 25.3819 38.3095 25.3819 38.9948C25.3819 39.5278 25.7627 40.1624 26.778 39.9593C30.8089 38.5984 34.3116 36.0077 36.7931 32.5518C39.2746 29.0959 40.6099 24.9489 40.6111 20.6944C40.6111 9.47562 31.5244 0.388885 20.3056 0.388885Z"
                  fill="black"
                />
              </svg>
            </ProjectLinks>
            <ProjectLinks
              href="https://anastasiia-tarasiuk.github.io/ice-cream-page/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9282 14.841L33.2237 1.54553M24.36 1.54553H33.2237V10.4092M33.2237 21.0455V29.9092C33.2237 30.8495 32.8501 31.7513 32.1852 32.4162C31.5203 33.0811 30.6185 33.4546 29.6782 33.4546H4.86003C3.91972 33.4546 3.01792 33.0811 2.35301 32.4162C1.68811 31.7513 1.31458 30.8495 1.31458 29.9092V5.09099C1.31458 4.15067 1.68811 3.24887 2.35301 2.58397C3.01792 1.91907 3.91972 1.54553 4.86003 1.54553H13.7237"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ProjectLinks>
          </div>
        </ProjectTextBox>

        <ProjectTextBox name="Filmoteka" id="projectInfo">
          <ProjectTextHeading>Description:</ProjectTextHeading>
          <ProjectText>
            A web app for visualizing movie library. See top films, add movies
            to your favourite, search films by filters and see movie details.
          </ProjectText>
          <div style={{ textAlign: 'end' }}>
            <ProjectLinks
              href="https://github.com/Lentuss/Filmoteka-5group"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.3056 0.388885C9.08674 0.388885 0 9.47562 0 20.6944C0 29.6796 5.81247 37.2689 13.8839 39.9593C14.8992 40.137 15.2799 39.5278 15.2799 38.9948C15.2799 38.5126 15.2545 36.9135 15.2545 35.2129C10.1528 36.152 8.83292 33.9692 8.42681 32.827C8.19837 32.2432 7.20847 30.4411 6.34549 29.9589C5.63479 29.5781 4.61951 28.639 6.3201 28.6136C7.91917 28.5882 9.06135 30.0858 9.44208 30.6949C11.2696 33.7661 14.1885 32.9032 15.3561 32.3701C15.5337 31.0503 16.0668 30.1619 16.6506 29.6543C12.1326 29.1466 7.41153 27.3953 7.41153 19.6284C7.41153 17.4202 8.19837 15.5927 9.49285 14.1713C9.28979 13.6636 8.5791 11.5823 9.6959 8.79031C9.6959 8.79031 11.3965 8.25729 15.2799 10.8716C16.9044 10.4148 18.6303 10.1863 20.3563 10.1863C22.0823 10.1863 23.8083 10.4148 25.4327 10.8716C29.3161 8.23191 31.0167 8.79031 31.0167 8.79031C32.1335 11.5823 31.4228 13.6636 31.2198 14.1713C32.5143 15.5927 33.3011 17.3948 33.3011 19.6284C33.3011 27.4207 28.5547 29.1466 24.0367 29.6543C24.7728 30.2888 25.4073 31.5071 25.4073 33.4108C25.4073 36.1267 25.3819 38.3095 25.3819 38.9948C25.3819 39.5278 25.7627 40.1624 26.778 39.9593C30.8089 38.5984 34.3116 36.0077 36.7931 32.5518C39.2746 29.0959 40.6099 24.9489 40.6111 20.6944C40.6111 9.47562 31.5244 0.388885 20.3056 0.388885Z"
                  fill="black"
                />
              </svg>
            </ProjectLinks>
            <ProjectLinks
              href="https://lentuss.github.io/Filmoteka-5group/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9282 14.841L33.2237 1.54553M24.36 1.54553H33.2237V10.4092M33.2237 21.0455V29.9092C33.2237 30.8495 32.8501 31.7513 32.1852 32.4162C31.5203 33.0811 30.6185 33.4546 29.6782 33.4546H4.86003C3.91972 33.4546 3.01792 33.0811 2.35301 32.4162C1.68811 31.7513 1.31458 30.8495 1.31458 29.9092V5.09099C1.31458 4.15067 1.68811 3.24887 2.35301 2.58397C3.01792 1.91907 3.91972 1.54553 4.86003 1.54553H13.7237"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ProjectLinks>
          </div>
        </ProjectTextBox>

        <ProjectTextBox name="Petly" id="projectInfo">
          <ProjectTextHeading>Description:</ProjectTextHeading>
          <ProjectText>
            A web app that helps to have a pet. You can sort pets for different
            categories. For instance, pet that are for sale, lost and so on.
            Also, you can add pets and help htem to find new owner.
          </ProjectText>
          <div style={{ textAlign: 'end' }}>
            <ProjectLinks
              href="https://github.com/velogitara/petly-project-front"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.3056 0.388885C9.08674 0.388885 0 9.47562 0 20.6944C0 29.6796 5.81247 37.2689 13.8839 39.9593C14.8992 40.137 15.2799 39.5278 15.2799 38.9948C15.2799 38.5126 15.2545 36.9135 15.2545 35.2129C10.1528 36.152 8.83292 33.9692 8.42681 32.827C8.19837 32.2432 7.20847 30.4411 6.34549 29.9589C5.63479 29.5781 4.61951 28.639 6.3201 28.6136C7.91917 28.5882 9.06135 30.0858 9.44208 30.6949C11.2696 33.7661 14.1885 32.9032 15.3561 32.3701C15.5337 31.0503 16.0668 30.1619 16.6506 29.6543C12.1326 29.1466 7.41153 27.3953 7.41153 19.6284C7.41153 17.4202 8.19837 15.5927 9.49285 14.1713C9.28979 13.6636 8.5791 11.5823 9.6959 8.79031C9.6959 8.79031 11.3965 8.25729 15.2799 10.8716C16.9044 10.4148 18.6303 10.1863 20.3563 10.1863C22.0823 10.1863 23.8083 10.4148 25.4327 10.8716C29.3161 8.23191 31.0167 8.79031 31.0167 8.79031C32.1335 11.5823 31.4228 13.6636 31.2198 14.1713C32.5143 15.5927 33.3011 17.3948 33.3011 19.6284C33.3011 27.4207 28.5547 29.1466 24.0367 29.6543C24.7728 30.2888 25.4073 31.5071 25.4073 33.4108C25.4073 36.1267 25.3819 38.3095 25.3819 38.9948C25.3819 39.5278 25.7627 40.1624 26.778 39.9593C30.8089 38.5984 34.3116 36.0077 36.7931 32.5518C39.2746 29.0959 40.6099 24.9489 40.6111 20.6944C40.6111 9.47562 31.5244 0.388885 20.3056 0.388885Z"
                  fill="black"
                />
              </svg>
            </ProjectLinks>
            <ProjectLinks
              href="https://velogitara.github.io/petly-project-front/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9282 14.841L33.2237 1.54553M24.36 1.54553H33.2237V10.4092M33.2237 21.0455V29.9092C33.2237 30.8495 32.8501 31.7513 32.1852 32.4162C31.5203 33.0811 30.6185 33.4546 29.6782 33.4546H4.86003C3.91972 33.4546 3.01792 33.0811 2.35301 32.4162C1.68811 31.7513 1.31458 30.8495 1.31458 29.9092V5.09099C1.31458 4.15067 1.68811 3.24887 2.35301 2.58397C3.01792 1.91907 3.91972 1.54553 4.86003 1.54553H13.7237"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ProjectLinks>
          </div>
        </ProjectTextBox>
      </ProjectBoxStyled>
    </Container>
  );
};

export default ProjectBox;
