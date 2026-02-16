import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext'; // Import Context Provider
import './animations.css'; // Global animations
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import GetStartedModal from './components/GetStartedModal'; // Import Modal Component
import Chatbot from './components/Chatbot';

// Pages
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';

function App() {
  return (
    <ModalProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <Footer />
          <ScrollToTopButton />
          <GetStartedModal />
          <Chatbot />
        </div>
      </Router>
    </ModalProvider>
  );
}




export default App;
