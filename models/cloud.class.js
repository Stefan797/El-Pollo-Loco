class Cloud extends MovableObject {

    width = 500;
    height = 250;
    y = 10;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.floor(Math.random() * 6000) + 100;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 25);
    }


}