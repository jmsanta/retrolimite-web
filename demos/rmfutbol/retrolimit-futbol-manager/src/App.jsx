import React, { useState } from 'react';
import { GameCanvas } from './game/GameCanvas';

export default function App() {
  const [view, setView] = useState('menu');

  const renderView = () => {
    switch (view) {
      case 'partido':
        return <GameCanvas />;
      case 'plantilla':
        return <div><h2>📋 Plantilla</h2><p>Aquí irá la plantilla del equipo.</p></div>;
      case 'fichajes':
        return <div><h2>💰 Fichajes</h2><p>Aquí podrás ver y fichar jugadores.</p></div>;
      case 'config':
        return <div><h2>⚙️ Configuración</h2><p>Opciones del juego.</p></div>;
      default:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button onClick={() => setView('partido')}>🏟️ Partido</button>
            <button onClick={() => setView('plantilla')}>📋 Plantilla</button>
            <button onClick={() => setView('fichajes')}>💰 Fichajes</button>
            <button onClick={() => setView('config')}>⚙️ Configuración</button>
          </div>
        );
    }
  };

  return (
    <div style={{
      fontFamily: 'monospace',
      backgroundColor: '#002b36',
      color: '#eee',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Retrolimit Fútbol Manager</h1>
      {renderView()}
      {view !== 'menu' && (
        <button style={{ marginTop: '2rem' }} onClick={() => setView('menu')}>🔙 Volver al menú</button>
      )}
    </div>
  );
}
