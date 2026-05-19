import React from "react";
import CabinCardList from "./CabinCardList";
import "../index.css";

function SavedCabins() {
  return (
    <main className="saved-cabins">
      <section className="saved-cabins__container">
        <h1 className="saved-cabins__title">Tus Refugios Guardados</h1>
        <p className="saved-cabins__subtitle">
          Aquí encontrarás las cabañas que has marcado como favoritas para tu
          próximo viaje.
        </p>

        {/* Reutilizamos nuestra lista pero le pasamos isSavedPage={true} */}
        <CabinCardList isSavedPage={true} />
      </section>
    </main>
  );
}

export default SavedCabins;
