import {Navigate, Route, Routes, Outlet} from 'react-router-dom';

import CategoryBookPage from './category/CategoryBookPage';

import AuthorBookPage from "./author/AuthorBookPage";
import ManageBookPage from "./book/ManageBookPage";
const BookPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='category'
          element={
            <>
              <CategoryBookPage />
            </>
          }
        />
               <Route
          path='managebook'
          element={
            <>
              <ManageBookPage/>
            </>
          }
        />
        <Route
          path='author'
          element={
            <>
              <AuthorBookPage />
            </>
          }
        />



        <Route index element={<Navigate to='/book/managebook' />} />
      </Route>
    </Routes>
  );
};

export default BookPage;
