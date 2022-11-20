import Container from 'components/Container';
import styledComponents from './Hero.styled';
import Section from 'components/Section';

const { HeroBox, HeroText, HeroSpan } = styledComponents;

const Hero = () => {
  return (
    <Container>
      <Section>
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
