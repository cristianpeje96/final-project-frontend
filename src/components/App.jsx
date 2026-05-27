import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import SavedCabins from "./SavedCabins";
import PopupWithForm from "./PopupWithForm";
import { fetchCabins } from "../utils/api";
import "../index.css";

function App() {
  const [cabins, setCabins] = useState([]);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
  };

  return (
    <div className="page">
      <Header onLoginClick={handleLoginClick} />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saved-cabins" element={<SavedCabins />} />
      </Routes>

      <Footer />

      {/*COMPONENTE DEL MODAL DE INICIAR SESIÓN */}
      <PopupWithForm
        title="Iniciar Sesión"
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        buttonText="Ingresar"
      >
        {/* modal  reutilizable */}
        <label className="popup__label">Correo electrónico</label>
        <input
          type="email"
          className="popup__input"
          placeholder="tu@correo.com"
          required
        />

        <label className="popup__label">Contraseña</label>
        <input
          type="password"
          className="popup__input"
          placeholder="••••••••"
          required
        />
      </PopupWithForm>
    </div>
  );
}

export default App;
