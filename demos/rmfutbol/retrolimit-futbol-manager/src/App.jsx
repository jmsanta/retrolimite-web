import React, { useState } from 'react';
import { GameCanvas } from './game/GameCanvas';
import Fichajes from './game/components/fichajes';
import Alineacion from './game/components/alineacion';

import BackgroundMusic from './game/components/music';
import Configuracion from './game/components/configuracion';
import Plantilla from './game/components/plantilla';

export default function App() {
  const [view, setView] = useState('menu');

  const renderView = () => {
    switch (view) {
      case 'partido':
        return <GameCanvas />;
      case 'plantilla':
        return <Plantilla/>
      case 'fichajes':
        return <Fichajes />;
      case 'alineacion':
        return <Alineacion />;  
      case 'config':
        return <Configuracion/>;
      default:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button onClick={() => setView('partido')}>🏟️ Partido</button>
            <button onClick={() => setView('plantilla')}>📋 Plantilla</button>
            <button onClick={() => setView('fichajes')}>💰 Fichajes</button>
            <button onClick={() => setView('alineacion')}>📋 Alineación</button>
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
        <BackgroundMusic />
    </div>
  );
}
