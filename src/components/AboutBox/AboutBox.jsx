import styledComponents from './AboutBox.styled';
import image from '../../images/ImageForResumeSite.png';
const { AboutBoxStyled, AboutBoxText, AboutImgBox } = styledComponents;

const AboutBox = () => {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
      }}
    >
      <AboutBoxStyled>
        <AboutBoxText>
          Hey, my name is Danila Fatyeyev.
          <br />
          <br /> I am a front-end web developer from Ukraine. I focus on HTML5,
          CSS3, JS, React. I’m always curious to learn more when it comes to new
          technologies and creative coding.
        </AboutBoxText>
      </AboutBoxStyled>
      <AboutImgBox>
        <div
          style={{
            display: 'block',
            width: '290px',
            height: 'auto',
            visibility: 'hidden',
          }}
        ></div>
        <img
          src={image}
          alt="resume"
          style={{
            display: 'block',
            width: '290px',
            height: 'auto',
            position: 'absolute',
            top: '-50px',
            left: '-15px',
          }}
        />
      </AboutImgBox>
    </div>
  );
};

export default AboutBox;
