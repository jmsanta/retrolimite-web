// src/components/Fichajes.jsx
import React from 'react';

export default function Fichajes() {
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
        Retrolimit Fútbol Manager
      </div>
        <div style={{
          textAlign: 'center',
          marginTop: 20
        }}>
          <img 
            src="/fichajes.bmp"
            alt="Pantalla Fichajes"
            style={{
              width: '100%',
              maxWidth: '800px',
              height: 'auto',
              border: '2px solid white',
              borderRadius: '10px'
            }}
          />
        </div>
    </div>
  );
}
