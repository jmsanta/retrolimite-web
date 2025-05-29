import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    console.log('✅ preload ejecutado');
  }

  create() {
    console.log('✅ create ejecutado');
    this.cameras.main.setBackgroundColor('#0a3d62');
    const field = this.add.rectangle(400, 300, 760, 560, 0x1e8449);
    const ball = this.add.circle(400, 300, 10, 0xffffff);
    const player1 = this.add.circle(300, 300, 15, 0xff4136);
    const player2 = this.add.circle(500, 300, 15, 0x0074d9);

    this.tweens.add({
      targets: ball,
      x: 500,
      y: 300,
      duration: 1500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }
}

export function GameCanvas() {
  const containerRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    console.log('🟡 Montando GameCanvas...');

    if (gameRef.current || !containerRef.current) {
      console.log('⚠️ Game ya inicializado o ref vacío');
      return;
    }

    gameRef.current = new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: '#000000',
      parent: containerRef.current,
      scene: [MainScene]
    });

    return () => {
      console.log('🔴 Desmontando GameCanvas');
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        margin: '0 auto',
        maxWidth: 800,
        width: '100%',
        height: 600,
        border: '2px solid #fff',
        backgroundColor: '#001f3f'
      }}
    ></div>
  );
}
