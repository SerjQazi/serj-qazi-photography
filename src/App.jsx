import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import FilmStrip from './components/FilmStrip';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <FilmStrip />
      <About />
      <Contacts />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
