import {Navigate, Route, Routes, Outlet} from 'react-router-dom';

import DienTichNhasPage from './dientichnhas/DienTichNhasPage';
import LoaiNhasPage from './loainhas/LoaiNhasPage';
import MucGiaThueNhasPage from './mucgiathuenhas/MucGiaThueNhasPage';
import ThoiGianThueNhasPage from './thoigianthuenhas/ThoiGianThueNhasPage';

const GeneralPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='loainhas'
          element={
            <>
              <LoaiNhasPage />
            </>
          }
        />
        <Route
          path='dientichnhas'
          element={
            <>
              <DienTichNhasPage />
            </>
          }
        />
        <Route
          path='mucgiathuenhas'
          element={
            <>
              <MucGiaThueNhasPage />
            </>
          }
        />
        <Route
          path='thoigianthuenhas'
          element={
            <>
              <ThoiGianThueNhasPage />
            </>
          }
        />
        <Route index element={<Navigate to='/thuenha/loainhas' />} />
      </Route>
    </Routes>
  );
};

export default GeneralPage;
