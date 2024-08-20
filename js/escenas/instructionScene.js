export class InstructionScene extends Phaser.Scene {
    constructor() {
        super({ key: 'InstructionScene' });
    }

    preload() {
        // Aquí puedes precargar cualquier recurso necesario para el nivel 1
        this.load.image('background', 'path/to/background.png');
        // Cargar otros recursos del primer nivel
    }

    create() {
        // Fondo negro
        this.cameras.main.setBackgroundColor('rgba(0, 0, 0, 1)');

        // Texto de instrucciones
        this.add.text(this.scale.width / 2, this.scale.height / 2, 'Presiona P para abrir el menú de pausa', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5);
        this.add.text(this.scale.width / 2, this.scale.height / 2 - 75, '¡Recolecta 6 pesos para tu pasaje!', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5);
        this.add.text(this.scale.width / 2, this.scale.height / 2 + 50, 'Presiona ESPACIO para continuar', { fontSize: '24px', fill: '#ffffff' }).setOrigin(0.5);

        // Escuchar la tecla Espacio para continuar
        this.input.keyboard.on('keydown-SPACE', () => {
            this.scene.start('level1'); // Cambia 'Level1' al nombre de la escena del primer nivel
        });
    }
}
