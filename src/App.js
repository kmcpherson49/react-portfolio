

import React from 'react';
import Nav from './components/Nav/nav';
import About from './components/About/about';
import Contact from './components/Contact/contact';
//import Portfolio from '/components/Portfolio';
//import Resume from '/components/Resume';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
      <About></About>
      <Contact></Contact>
      {/* <Portfolio></Portfolio>
      <Resume></Resume> */}
      </main>
    </div>
  );
}

export default App;
