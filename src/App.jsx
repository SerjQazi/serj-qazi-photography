import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Portraits from './components/portfolioComponents/portraits/Portraits.jsx'

function App() {

  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portraits" element={<Portraits />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
