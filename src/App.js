import './App.css';
import { Routes, Route } from "react-router-dom";

// layout
import NavBar from './layout/NavBar';
import FooterDiv from './layout/FooterDiv';

// pages
import MainPage from './pages/MainPage';
import ConceptPage from './pages/ConceptPage';
import ImagesPage from './pages/ImagesPage';
import AboutPage from './pages/AboutPage';
import FeedPage from './pages/FeedPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className='container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/images" element={<ImagesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FooterDiv/>
    </div>
  );
}

export default App;
