import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Splashscreen from './pages/splashscreen/Splashscreen';
import Gallery from './pages/gallery/Gallery';
import Identities from './pages/gallery/pages/identities/Identities';
import Liminal from './pages/gallery/pages/liminal/Liminal';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

import Navbar from './components/navbar/Navbar';



function App() {
  return (
    <div className="app">
    <Router>
      <Navbar />
        <div className="mainContent">
        <Routes>
          <Route path="/" element={<Splashscreen />} />
          <Route path="/work" element={<Gallery />} />
          <Route path="/work/identities" element={<Identities />} />
          <Route path="/work/liminal" element={<Liminal />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
