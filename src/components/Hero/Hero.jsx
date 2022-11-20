import Container from 'components/Container';
import styledComponents from './Hero.styled';

const { HeroBox, HeroText, HeroSpan } = styledComponents;

const Hero = () => {
  return (
    <Container>
      <HeroBox>
        <p>Hello, my name is</p>
        <HeroText>
          Danila Fatyeyev.
          <br />
          <HeroSpan>I am front-end developer.</HeroSpan>
        </HeroText>
      </HeroBox>
    </Container>
  );
};

export default Hero;
