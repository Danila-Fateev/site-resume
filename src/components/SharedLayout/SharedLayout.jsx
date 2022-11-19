import Container from 'components/Container';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
