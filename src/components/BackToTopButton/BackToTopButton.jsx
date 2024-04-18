// BackToTopButton.js
import React from 'react';

function BackToTopButton() {
  // Función para desplazar la página hacia arriba cuando se hace clic en el botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="btn-back-to-top" id="myBtn" onClick={scrollToTop}>
      {/* Contenedor del botón */}
      <span className="symbol-btn-back-to-top">
        {/* Contenedor del icono */}
        <i className="zmdi zmdi-chevron-up"></i>
        {/* Icono de flecha hacia arriba */}
      </span>
    </div>
  );
}

export default BackToTopButton;
