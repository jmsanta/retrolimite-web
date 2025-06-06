import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }


  preload() {
    this.load.image('team1', 'team1.png');
    this.load.image('team2', 'team2.png');
    this.load.image('vs', 'vs.png');
  }

  create() {
    console.log('✅ create ejecutado');
    this.cameras.main.setBackgroundColor('#0a3d62');

    const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xffffff } });

    // Campo
    graphics.strokeRect(20, 20, 760, 560);
    graphics.strokeLineShape(new Phaser.Geom.Line(400, 20, 400, 580));
    graphics.strokeCircle(400, 300, 60);

    // Áreas
    graphics.strokeRect(20, 220, 60, 160);
    graphics.strokeRect(20, 260, 20, 80);
    graphics.strokeRect(720, 220, 60, 160);
    graphics.strokeRect(760, 260, 20, 80);

    const field = this.add.rectangle(400, 300, 760, 560, 0x1e8449);
    const ball = this.add.circle(400, 300, 10, 0xffffff);
    const player1 = this.add.rectangle(300, 300, 20, 50, 0xff4136);
    const player1_2 = this.add.rectangle(250, 200, 20, 45, 0xff4136);
    const player1_3 = this.add.rectangle(200, 100, 20, 45, 0xff4136);
    const player1_4 = this.add.rectangle(150, 430, 25, 45, 0xff4136);
    const player2 = this.add.rectangle(500, 300, 20, 50, 0x0074d9);
    const player2_2 = this.add.rectangle(600, 350, 25, 50, 0x0074d9);
    const player2_3 = this.add.rectangle(400, 150, 25, 45, 0x0074d9);
    const player2_4 = this.add.rectangle(410, 450, 25, 45, 0x0074d9);

      // Escudos y VS
    this.add.image(620, 40, 'team1').setOrigin(0).setScale(1);
    this.add.image(40, 40, 'team2').setOrigin(0).setScale(1);
    this.add.image(368, 40, 'vs').setOrigin(0).setScale(0.75);
  

    this.tweens.add({
      targets: ball,
      x: 300,
      y: 400,
      duration: 2500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });


     this.tweens.add({
      targets: player1_4,
      x: 300,
      y: 400,
      duration: 6500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    this.tweens.add({
      targets: player1_2,
      x: 300,
      y: 400,
      duration: 6500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    this.tweens.add({
      targets: player1_3,
      x: 400,
      y: 300,
      duration: 5500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

     this.tweens.add({
      targets: player2_4,
      x: 300,
      y: 400,
      duration: 2500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    this.tweens.add({
      targets: player2,
      x: 400,
      y: 300,
      duration: 2500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    this.tweens.add({
      targets: player2_3,
      x: 200,
      y: 400,
      duration: 2500,
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
