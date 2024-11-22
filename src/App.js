import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import Loading from './pages/Loading';

const LazyMainPage = lazy(() => import("./pages/MainPage"));
const LazyMoreDetailsPage = lazy(() => import("./pages/MoreDetails"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Suspense fallback={<Loading />}><LazyMainPage /></Suspense>} />
          <Route path='project/:projectName' element={<Suspense fallback={<Loading />}><LazyMoreDetailsPage /></Suspense>} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
