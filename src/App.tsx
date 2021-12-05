import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './styles/global';

import { PageRandom } from './Pages/PageRandom';
import { PageType } from './Pages/PageType';
import { PageKey } from './Pages/PageKey';
import { FavoriteProvider } from './context/Context';
import { PageFavorite } from './Pages/PageFavorite';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <FavoriteProvider>
      <Routes>
        <Route path="/" element={<PageRandom />} />
        <Route path="/type" element={<PageType />} />
        <Route path="/key" element={<PageKey />} />
        <Route path='/favorite' element={<PageFavorite />} />
      </Routes>
      </FavoriteProvider>
    </BrowserRouter>
  );
}

export default App;
