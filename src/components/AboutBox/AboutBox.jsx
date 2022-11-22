import styledComponents from './AboutBox.styled';

const { AboutBoxStyled, AboutBoxText } = styledComponents;

const AboutBox = () => {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <AboutBoxStyled>
        <AboutBoxText>
          Hey, my name is Danila Fatyeyev.
          <br />
          <br /> I am a front-end web developer from Ukraine. I am also
          passionate about pop music and make portraits and universes around
          what I listen to and I’m always curious to learn more when it comes to
          new technologies and creative coding.
        </AboutBoxText>
      </AboutBoxStyled>
    </div>
  );
};

export default AboutBox;
