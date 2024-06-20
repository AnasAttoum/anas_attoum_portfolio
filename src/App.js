import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import MoreDetailsPage from './Pages/MoreDetailsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<MainPage />} />
          <Route path='project/:projectName' element={<MoreDetailsPage />} />
          <Route path='more' element={<MoreDetailsPage />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
