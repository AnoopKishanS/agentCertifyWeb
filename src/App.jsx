import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import BlogArticle from './pages/BlogArticle';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    const isBlogRoute = location.pathname.startsWith('/blog');
    if (isBlogRoute) {
      document.documentElement.classList.add('blog-route');
      document.body.classList.add('blog-route');
    } else {
      document.documentElement.classList.remove('blog-route');
      document.body.classList.remove('blog-route');
    }
    return () => {
      document.documentElement.classList.remove('blog-route');
      document.body.classList.remove('blog-route');
    };
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
      <GetStartedModal />
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <ModalProvider>
      <Router>
        <div className="App">
          <AppRoutes />
        </div>
      </Router>
    </ModalProvider>
  );
}




export default App;
