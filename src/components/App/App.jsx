import SharedLayout from 'components/SharedLayout';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route index element={} /> */}
      </Route>
    </Routes>
  );
};
