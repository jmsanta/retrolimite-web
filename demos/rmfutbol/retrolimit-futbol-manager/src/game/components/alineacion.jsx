// src/components/Alineacion.jsx
import React from 'react';

export default function Alineacion() {
  return (
    <div style={{
      maxWidth: 900,
      margin: '40px auto',
      border: '4px solid #fff',
      borderRadius: 10,
      backgroundColor: '#1a1a1a',
      boxShadow: '0 0 20px #000',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '12px 24px',
        fontSize: '20px',
        textAlign: 'center',
        fontWeight: 'bold',
        borderBottom: '2px solid #444'
      }}>
        Retrolimit Fútbol Manager: ALINEACIÓN
      </div>
      <div style={{ backgroundColor: '#422', padding: 20, textAlign: 'center' }}>
        <img
          src="/alineacion.jpg"
          alt="Pantalla Alineación"
          style={{
            maxWidth: '100%',
            height: 'auto',
            border: '6px solid #fff',
            borderRadius: 8
          }}
        />
      </div>
    </div>
  );
}
