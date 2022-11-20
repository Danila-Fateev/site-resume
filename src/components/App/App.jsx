import SharedLayout from 'components/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
