

import React, { useState } from 'react';
import Nav from './components/Nav/nav';

import Page from './components/Page/page'

function App() {
  const[tabs] = useState([
    {name: 'about me'
  },
  {name: 'portfolio'
  },
  {name: 'resume'
  },
  {name: 'contact'
  },
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div>
      <Nav
      tabs={tabs}
      setCurrentTab={setCurrentTab}
      currentTab={currentTab}
      ></Nav>
      <main>
      <Page currentTab={currentTab}></Page>
      </main>
    </div>
  );
}

export default App;
