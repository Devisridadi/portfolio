import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import WelcomeCard from './components/WelcomeCard';
import './styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowWelcome(true);
    }, 1000); 
    
    return () => clearTimeout(timer);
  }, []);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
  };

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader">
          <div className="loader-spinner"></div>
        </div>
      ) : (
        <>
          <AnimatePresence mode="wait">
            {showWelcome && (
              <WelcomeCard onClose={handleCloseWelcome} />
            )}
             
          </AnimatePresence>
          
          <Navbar />
          <Home/>
          <main className={showWelcome ? 'blur-background' : ''}>
            <About/>
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </>
       
      )}
    </div>
  );
}

export default App;