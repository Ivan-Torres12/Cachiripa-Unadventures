export class PauseScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PauseScene' });
    }

    init(data) {
        this.currentLevel = data.currentLevel; // Almacenar el nombre de la escena del nivel actual
    }

    create() {
        // Fondo semi-transparente
        this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 0.5)');

        // Texto de "Pausa"
        this.add.text(this.scale.width / 2, this.scale.height / 2 - 200, 'Paused', { fontSize: '64px', fill: '#ffffff' }).setOrigin(0.5);

        // Contenedor de los controles del juego
        const controlsText = `
        Controls:
        W - Jump
        A - Left
        D - Right

        Up, Down,          Unleash            
        Left, Right   -  Cachiripa's
        (Arrow Keys)        Fury
        `;
        this.add.text(this.scale.width / 2 - 200, this.scale.height / 2, controlsText, { fontSize: '24px', fill: '#ffffff', align: 'left' }).setOrigin(0.5);

        // Botón para reanudar
        let resumeButton = this.add.text(this.scale.width / 2 + 200, this.scale.height / 2 - 50, 'Resume', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
        resumeButton.setInteractive({ useHandCursor: true });
        resumeButton.on('pointerdown', () => {
            this.scene.resume(this.currentLevel); // Reanudar la escena del nivel actual
            this.scene.stop(); // Detener la escena de pausa
        });

        // Botón para volver al menú principal
        let mainMenuButton = this.add.text(this.scale.width / 2 + 200, this.scale.height / 2 + 50, 'Main Menu', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
        mainMenuButton.setInteractive({ useHandCursor: true });
        mainMenuButton.on('pointerdown', () => {
            this.scene.stop(this.currentLevel); // Detener la escena del nivel actual
            this.scene.stop('PauseScene');
            this.scene.start('StartScene');
        });
    }
}
