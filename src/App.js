import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "ContactForm":
        return <ContactForm />;
      case "Resume": 
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {renderPage(currentPage)}
      </main>
      <Footer />
    </div>
  );
}

export default App;