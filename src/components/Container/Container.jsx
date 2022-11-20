import { styledComponents } from './Container.styled';

const { ContainerStyled } = styledComponents;

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
