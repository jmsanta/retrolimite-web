// src/components/music.jsx
import React, { useRef, useState } from 'react';

export default function BackgroundMusic({ styleOverride = {} }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.5;
      audio.play().then(() => setPlaying(true)).catch((err) => {
        console.warn("El navegador bloqueó la reproducción automática:", err);
      });
    }
  };

  console.log("Componente de música cargado");

  return (
    <div style={{ marginTop: 30, ...styleOverride }}>
      <button
        onClick={toggleMusic}
        style={{
          backgroundColor: playing ? '#400' : '#222',
          color: '#fff',
          border: '2px solid #0ff',
          padding: '10px 18px',
          borderRadius: 6,
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          fontFamily: 'Arial',
          transition: 'background 0.2s'
        }}
      >
        {playing ? '🔇 Detener Música' : '🎵 Activar Música'}
      </button>
      <audio ref={audioRef} src="/songTitle.m4a" loop preload="auto" />
    </div>
  );
}
