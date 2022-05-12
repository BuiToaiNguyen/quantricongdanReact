import {Navigate, Route, Routes, Outlet} from 'react-router-dom';

import MedicalHotlinesPage from './medicalhotlines/MedicalHotlinesPage';
import DiseasesPage from './diseases/DiseasesPage';

const GeneralPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='medicalhotlines'
          element={
            <>
              <MedicalHotlinesPage />
            </>
          }
        />
        <Route
          path='diseases'
          element={
            <>
              <DiseasesPage />
            </>
          }
        />
        <Route index element={<Navigate to='/medical/medicalhotlines' />} />
      </Route>
    </Routes>
  );
};

export default GeneralPage;
