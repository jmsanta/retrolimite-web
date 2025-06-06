// src/components/Configuracion.jsx
import React from 'react';
import BackgroundMusic from './music';

export default function Configuracion() {
  console.log("Configuración cargada");
  return (
    <div style={{
      maxWidth: 1000,
      margin: '40px auto',
      backgroundColor: '#555',
      border: '3px solid #fff',
      borderRadius: 10,
      padding: '30px 20px',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 0 20px #000'
    }}>

      <h2 style={{ fontSize: '24px', borderBottom: '2px solid #444', paddingBottom: 10 }}>
        ⚙️ Configuración
 
      </h2>
      <p style={{ fontSize: '16px', marginTop: 20 }}>Opciones del juego.</p>
      <BackgroundMusic/>

    </div>
     
  );
}

