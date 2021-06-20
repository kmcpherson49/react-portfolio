import React from "react";
import About from "../About/about";
import Contact from "../Contact/contact";
import Portfolio from '../Portfolio';
import Resume from "../Resume/resume";
import CurrentPageContent from "../CurrentPageContent/CurrentPageContent";

function Page({ currentTab }) {
  const renderTab = () => {
    switch (currentTab.name) {
      default:
        return <About />;
      case "contact":
        return <Contact />;
      case "portfolio":
        return <Portfolio />;
      case "resume":
        return <Resume />;
    }
  };
  return <CurrentPageContent >{renderTab()}</CurrentPageContent>;
}

export default Page;
