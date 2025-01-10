import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import Loading from './pages/Loading';
import Footer from './components/Footer';

const LazyMainPage = lazy(() => import("./pages/MainPage"));
const LazyMoreDetailsPage = lazy(() => import("./pages/MoreDetails"));
const LazyNotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Suspense fallback={<Loading />}><LazyMainPage /></Suspense>} />
          <Route path='project/:projectName' element={<Suspense fallback={<Loading />}><LazyMoreDetailsPage /></Suspense>} />

          <Route path='*' element={<Suspense fallback={<Loading />}><LazyNotFoundPage /></Suspense>} />

        </Routes>
        
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
