import Container from 'components/Container';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <main>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </main>
  );
};

export default SharedLayout;
