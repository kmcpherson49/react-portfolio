import React from "react";

const Modal = ({ onClose, currentProject }) => {
  const { name, description, deployed, repo, index } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/screenshots/${index}.jpg`)}
          alt="current project"
        />
        <p>{description}</p>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = { deployed };
          }}
        >
          Go to app
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = { repo };
          }}
        >
          Go to repo
        </button>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
