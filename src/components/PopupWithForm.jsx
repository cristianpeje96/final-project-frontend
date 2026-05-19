import React from "react";
import "../index.css";

function PopupWithForm({ title, isOpen, onClose, children, buttonText }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? "popup--opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="popup__container">
        {/* Botón para cerrar*/}
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
          aria-label="Cerrar"
        />

        <h2 className="popup__title">{title}</h2>

        {/* Formulario */}
        <form className="popup__form">
          {children}
          <button type="submit" className="popup__submit-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
