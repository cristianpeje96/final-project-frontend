import React from "react";
import "../index.css";

function CabinCard({
  title,
  description,
  image,
  price,
  location,
  isSavedPage,
  onSaveClick,
}) {
  return (
    <article className="cabin-card">
      <img src={image} alt={title} className="cabin-card__image" />

      <button
        type="button"
        className={`cabin-card__save-button ${isSavedPage ? "cabin-card__save-button--active" : ""}`}
        onClick={onSaveClick}
        aria-label="Guardar cabaña"
      />

      {/* Contenido de la Tarjeta */}
      <div className="cabin-card__content">
        <span className="cabin-card__location">{location}</span>
        <h3 className="cabin-card__title">{title}</h3>
        <p className="cabin-card__description">{description}</p>

        <div className="cabin-card__footer">
          <p className="cabin-card__price">
            <span className="cabin-card__price-amount">${price}</span> / noche
          </p>
        </div>
      </div>
    </article>
  );
}

export default CabinCard;
