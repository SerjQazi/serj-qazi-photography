import Header from '../components/Header';
import FilmStrip from '../components/FilmStrip';
import About from '../components/About';
import Contacts from '../components/contacts/Contacts';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
      <Header />
      <FilmStrip />
      <About />
      <Contacts />
      <Footer />
    </>
  );
}

export default Home;
