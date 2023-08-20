import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import FilmStrip from './components/FilmStrip';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <FilmStrip />
      <About />
    </BrowserRouter>
  );
}

export default App;
