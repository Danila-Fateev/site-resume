import Container from 'components/Container';
import styledComponents from './Hero.styled';
import Section from 'components/Section';

const { HeroBox, HeroText, HeroSpan } = styledComponents;

const Hero = () => {
  return (
    <Container>
      <Section>
        <h1 style={{ visibility: 'hidden' }}>About me</h1>
        <HeroBox>
          <p>Hello, my name is</p>
          <HeroText>
            Danila Fatyeyev.
            <br />
            <HeroSpan>I am front-end developer.</HeroSpan>
          </HeroText>
        </HeroBox>
      </Section>
    </Container>
  );
};

export default Hero;
