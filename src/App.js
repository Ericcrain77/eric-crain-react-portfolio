import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;