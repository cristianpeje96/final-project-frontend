import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";

function Header({ onLoginClick }) {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logotipo */}
        <NavLink to="/" className="header__logo">
          Chalet Terraverde
        </NavLink>

        {/* Navegación Principal */}
        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header__link ${isActive ? "header__link--active" : ""}`
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/saved-cabins"
            className={({ isActive }) =>
              `header__link ${isActive ? "header__link--active" : ""}`
            }
          >
            Cabañas Guardadas
          </NavLink>

          <button
            type="button"
            className="header__button"
            onClick={onLoginClick}
          >
            Iniciar Sesión
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
