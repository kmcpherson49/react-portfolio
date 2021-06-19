

import React, { useState } from 'react';
import Nav from './components/Nav/nav';

import Page from './components/Page/page'

function App() {
  const[tabs] = useState([
    {name: 'contact'
  },
  {name: 'portfolio'
  },
  {name: 'resume'
  },
  {name: 'about me'
  },
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  //const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
      tabs={tabs}
      setCurrentTab={setCurrentTab}
      currentTab={currentTab}
      // contactSelected={contactSelected}
      // setContactSelected={setContactSelected}
      ></Nav>
      <main>
      <Page currentTab={currentTab}></Page>
      </main>
    </div>
  );
}

export default App;
