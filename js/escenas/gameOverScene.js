export class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    init(data) {
        this.currentLevel = data.currentLevel; // Almacenar el nombre de la escena del nivel actual
    }

    create() {
        this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 1)');
        this.add.text(this.scale.width / 2, this.scale.height / 2, 'Game Over', { fontSize: '64px', fill: '#ff0000' }).setOrigin(0.5);

        let restartButton = this.add.text(this.scale.width / 2, this.scale.height / 2 + 100, 'Restart', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
        restartButton.setInteractive();
        restartButton.on('pointerdown', () => {
            this.scene.stop(this.currentLevel); // Detener la escena del nivel actual
            this.scene.stop('GameOverScene');
            this.scene.launch('level1'); // Reiniciar la escena del nivel actual
        });

        let menuButton = this.add.text(this.scale.width / 2, this.scale.height / 2 + 150, 'Main Menu', { fontSize: '32px', fill: '#ffffff' }).setOrigin(0.5);
        menuButton.setInteractive();
        menuButton.on('pointerdown', () => {
            this.scene.stop(this.currentLevel); // Asegúrate de detener la escena del nivel actual también
            this.scene.stop('GameOverScene');
            this.scene.start('StartScene');
        });
    }
}
