import Header from '../components/Header';
import FilmStrip from '../components/FilmStrip';
import About from '../components/About';
import Contacts from '../components/contacts/Contacts';
import Footer from '../components/Footer';

import ScrollTop from '../components/buttons/scrollTop/ScrollTop';

function Home() {
  return (
    <>
      <ScrollTop />
      <Header />
      <FilmStrip />
      <About />
      <Contacts />
      <Footer />
    </>
  );
}

export default Home;
