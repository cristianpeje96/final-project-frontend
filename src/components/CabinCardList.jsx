import React from "react";
import CabinCard from "./CabinCard";
import "../index.css";

// Datos de prueba
const MOCK_CABINS = [
  {
    id: 1,
    title: "Chalet Alpino A-Frame",
    location: "Santa Elena, Antioquia",
    description:
      "Espectacular cabaña triangular con deck privado, jacuzzi y una vista increíble a la niebla del bosque nativo.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Refugio Domo Verde",
    location: "Guatavita, Cundinamarca",
    description:
      "Glamping tipo domo geodésico rodeado de naturaleza. Perfecto para ver las estrellas gracias a su techo panorámico.",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Eco-Cabin Ancestral",
    location: "Pasto, Nariño",
    description:
      "Construcción sostenible en madera y piedra a los pies de la montaña. Desconexión total con fogata al aire libre.",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?auto=format&fit=crop&w=600&q=80",
  },
];

function CabinCardList({ isSavedPage }) {
  const handleSaveToggle = (id) => {
    console.log("Interactuando con la cabaña id:", id);
  };

  return (
    <div className="cabin-list-container">
      <div className="cabin-grid">
        {MOCK_CABINS.map((cabin) => (
          <CabinCard
            key={cabin.id}
            title={cabin.title}
            location={cabin.location}
            description={cabin.description}
            price={cabin.price}
            image={cabin.image}
            isSavedPage={isSavedPage}
            onSaveClick={() => handleSaveToggle(cabin.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CabinCardList;
