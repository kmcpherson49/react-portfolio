import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import coverImage from '../../assets/cover/portfolio-header.jpg';

function Nav(props) {
  const {
    tabs = [],
    setCurrentTab,
    contactSelected,
    currentTab,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <header className="flex-row px-1">
    {/* <h1>
      <a href="/">Krista McPherson's Portfolio</a>
    </h1> */}
    <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          {tabs.map((tab) => (
            <li
              className={`mx-1 ${
                currentTab.name === tab.name && !contactSelected && 'navActive'
                }`}
              key={tab.name}
            >
              <span
                onClick={() => {
                  setCurrentTab(tab);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(tab.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  </header>
  );
}

export default Nav;