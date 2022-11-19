import { Outlet } from 'react-router-dom';
import { styledComponents } from './Container.styled';

const { ContainerStyled } = styledComponents;

const Container = () => {
  return (
    <ContainerStyled>
      <Outlet />
    </ContainerStyled>
  );
};

export default Container;
