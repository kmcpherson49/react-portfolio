

import React, { useState } from 'react';
import Nav from './components/Nav/nav';
import About from './components/About/about';
import Contact from './components/Contact/contact';
//import Portfolio from '/components/Portfolio';
//import Resume from '/components/Resume';

function App() {
  const[tabs] = useState([
    {name: 'contact',
  description: "Let's get in touch"
  },
  {name: 'portfolio',
  description: "A collection of my work"
  },
  {name: 'resume',
  description: "Take a look at the things I've done"
  },
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
      tabs={tabs}
      setCurrentTab={setCurrentTab}
      currentTab={currentTab}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
      <About></About>
      {/* <Portfolio></Portfolio>
      <Resume></Resume> */}
      <Contact></Contact>
    
      </main>
    </div>
  );
}

export default App;
