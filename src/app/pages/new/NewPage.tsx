import {Navigate, Route, Routes, Outlet} from 'react-router-dom';

import SeaGamesPage from './seagames/SeaGamesPage';

const GeneralPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='seagames'
          element={
            <>
              <SeaGamesPage />
            </>
          }
        />
        <Route index element={<Navigate to='/new/seagames' />} />
      </Route>
    </Routes>
  );
};

export default GeneralPage;
