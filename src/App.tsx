import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './styles/global';

import { PageRandom } from './Pages/PageRandom';
import { PageType } from './Pages/PageType';
import { PageKey } from './Pages/PageKey';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      
      <Routes>
        <Route path="/" element={<PageRandom />} />
        <Route path="/type" element={<PageType />} />
        <Route path="/key" element={<PageKey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
