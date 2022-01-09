import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;