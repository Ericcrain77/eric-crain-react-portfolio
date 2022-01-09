import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected} 
      />
      <main>
        {!contactSelected ? (
          <>
            <About currentCategory={currentCategory} />
            <Resume />
            <Portfolio />
          </>
        ) : (
            <ContactForm />
          )}
      </main>
      <Footer />
    </div>
  );
}

export default App;