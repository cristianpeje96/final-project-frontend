import React, { useState, useEffect } from "react";
import { fetchCabins } from "../utils/api";
import CabinCard from "./CabinCard";
import "../index.css";

function CabinCardList({ isSavedPage }) {
  const [cabins, setCabins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCabins()
      .then((data) => {
        setCabins(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar cabañas:", err);
        setIsLoading(false);
      });
  }, []);

  const handleSaveToggle = (id) => {
    console.log("Interactuando con la cabaña id:", id);
  };

  if (isLoading) {
    return <p className="cabin-list__loading">Cargando refugios...</p>;
  }

  return (
    <div className="cabin-list-container">
      <div className="cabin-grid">
        {cabins.map((cabin) => (
          <CabinCard
            key={cabin.id}
            title={cabin.title}
            location={cabin.location || "Ubicación no disponible"}
            description={cabin.description || "Sin descripción"}
            price={cabin.price || 0}
            image={cabin.image || "https://placehold.co/300"}
            isSavedPage={isSavedPage}
            onSaveClick={() => handleSaveToggle(cabin.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CabinCardList;
