import styledComponents from './Section.styled';

const { SectionStyled } = styledComponents;

const Section = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};

export default Section;
