import { useEffect } from 'react';

// const LazyMainPage = lazy(() => import("./pages/MainPage"));
// const LazyMoreDetailsPage = lazy(() => import("./pages/MoreDetails"));
// const LazyNotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {

  useEffect(() => {
    window.location.href = "https://anas-attoum.vercel.app/";
  }, []);

  return null; // no need to render old routes

  // return (
  //   <>
  //     <BrowserRouter>
  //       <Routes>

  //         <Route path='/' element={<Suspense fallback={<Loading />}><LazyMainPage /></Suspense>} />
  //         <Route path='project/:projectName' element={<Suspense fallback={<Loading />}><LazyMoreDetailsPage /></Suspense>} />

  //         <Route path='*' element={<Suspense fallback={<Loading />}><LazyNotFoundPage /></Suspense>} />

  //       </Routes>
        
  //       <Footer />

  //     </BrowserRouter>
  //   </>
  // );
}

export default App;
