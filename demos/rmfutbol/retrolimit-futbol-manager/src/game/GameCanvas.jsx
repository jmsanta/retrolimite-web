import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.image('team1', '/team1.png');
    this.load.image('team2', '/team2.png');
    this.load.image('vs', '/vs.png');
  }

  create() {
    this.cameras.main.setBackgroundColor('#000');

    const width = 800;
    const height = 600;

    // Fondo verde césped
    this.add.rectangle(width / 2, height / 2, width, height, 0x006600);

    const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xffffff } });

    // Líneas del campo
    graphics.strokeRect(0, 0, width, height); // borde
    graphics.strokeLineShape(new Phaser.Geom.Line(width / 2, 0, width / 2, height)); // línea central

    // Círculo central
    graphics.strokeCircle(width / 2, height / 2, 40);

    // Porterías
    graphics.strokeRect(0, height / 2 - 40, 10, 80); // izquierda
    graphics.strokeRect(width - 10, height / 2 - 40, 10, 80); // derecha

    // Jugadores
    const players = [
      this.add.rectangle(300, 300, 20, 50, 0xff4136),
      this.add.rectangle(250, 200, 20, 45, 0xff4136),
      this.add.rectangle(200, 100, 20, 45, 0xff4136),
      this.add.rectangle(150, 430, 25, 45, 0xff4136),
      this.add.rectangle(500, 300, 20, 50, 0x0074d9),
      this.add.rectangle(600, 350, 25, 50, 0x0074d9),
      this.add.rectangle(400, 150, 25, 45, 0x0074d9),
      this.add.rectangle(410, 450, 25, 45, 0x0074d9),
    ];

    // Balón
    const ball = this.add.circle(400, 300, 10, 0xffffff);

    // Escudos y "VS"
    this.add.image(40, 40, 'team1').setOrigin(0).setScale(0.5);
    this.add.image(700, 40, 'team2').setOrigin(0).setScale(0.5);
    this.add.image(368, 40, 'vs').setOrigin(0).setScale(0.75);

    // Animaciones
    this.tweens.add({
      targets: ball,
      x: 300,
      y: 400,
      duration: 2500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    players.forEach((player, index) => {
      this.tweens.add({
        targets: player,
        x: 300 + Math.sin(index) * 100,
        y: 300 + Math.cos(index) * 100,
        duration: 2000 + index * 400,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'
      });
    });
  }
}

export function GameCanvas() {
  const containerRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    if (gameRef.current || !containerRef.current) return;

    gameRef.current = new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: containerRef.current,
      scene: [MainScene],
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      }
    });

    return () => {
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
        width: '100%',
        maxWidth: '100%',
        aspectRatio: '4 / 3',
        margin: '0 auto',
        border: '2px solid #fff',
        overflow: 'hidden',
        backgroundColor: '#000'
      }}
    />
  );
}
