import React, { useState } from "react";
import CabinCardList from "../CabinCardList";
import "../../index.css";

function Main() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Buscando cabañas en:", searchQuery);
  };

  return (
    <main className="main">
      {/* BUSCADOR */}
      <section className="main__hero">
        <div className="main__hero-container">
          <h1 className="main__title">
            Encuentra tu próximo refugio en la naturaleza
          </h1>
          <p className="main__subtitle">
            Descubre cabañas alpinas, modernos chalets y espacios únicos para
            desconectarte.
          </p>

          {/* Formulario de Búsqueda */}
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="search-form__input"
              placeholder="¿A dónde quieres ir? (Ej. Montaña, Bosque...)"
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
            <button type="submit" className="search-form__button">
              Buscar
            </button>
          </form>
        </div>
      </section>

      {/* SECCIÓN DE RESULTADOS (PLACEHOLDER) */}
      <section className="main__results">
        <h2 className="main__results-title">Nuestros Refugios Disponibles</h2>
        <CabinCardList isSavedPage={false} />
      </section>
    </main>
  );
}

export default Main;
