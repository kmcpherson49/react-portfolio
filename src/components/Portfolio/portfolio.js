import React, { useState } from "react";
//import Modal from ''
const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [project] = useState([
    {
      name: "Planetarium Party",
      description:
        "This project is an app that allows users to search for their favorite planet and in return they'll get an image from the NASA API and a portion of the Wikipedia article about that planet. It features continuous dark mode to enhance the feel of being in space.",
      deployed: "https://emistew14.github.io/Planetarium-Party/",
      repo: "https://github.com/kmcpherson49/Planetarium-Party",
    },
    {
      name: "Weather Dashboard",
      description:
        "This project is a weather app that will give users the forecast for the day plus a 5-day forecast",
      deployed: "https://kmcpherson49.github.io/weather-dashboard/",
      repo: "https://github.com/kmcpherson49/weather-dashboard",
    },
    {
      name: "Day Planner",
      description:
        "This project is an electronic day planner used to add tasks to time slots in order to stay organized.",
      deployed: "https://kmcpherson49.github.io/work-scheduler/",
      repo: "https://github.com/kmcpherson49/work-scheduler",
    },
    {
      name: "Password Generator",
      description:
        "This project is a password generator that will give users a secure, random password after a series of prompts.",
      deployed: "https://kmcpherson49.github.io/password-generator/",
      repo: "https://github.com/kmcpherson49/password-generator",
    },
    {
      name: "Food Truck App",
      description:
        "This project is an app that allows users to search for a local food truck to read reviews, leave ratings, post about the food trucks, and find contact information for the trucks.",
      deployed: "https://local-food-truck-finder.herokuapp.com/",
      repo: "https://github.com/kmcpherson49/food-truck-rating",
    },
    {
      name: "Budget Tracker",
      description:
        "This project is an app that allows users to track their spending while traveling or in everyday life. This app showcases the features of a Progessive Web Applications with a cache and offline capabilites.",
      deployed: "https://frozen-sierra-56639.herokuapp.com/",
      repo: "https://github.com/kmcpherson49/budget-tracker",
    },
  ]);

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="flex-row">
        {currentProject.map((image, i) => (
          <img
            src={require(`../../assets/screenshots/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
