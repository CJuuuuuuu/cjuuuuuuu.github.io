import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Experience from './pages/Experience';
import CV from './pages/CV';

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/research"     element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/experience"   element={<Experience />} />
        <Route path="/cv"           element={<CV />} />
      </Routes>
    </HashRouter>
  );
}
