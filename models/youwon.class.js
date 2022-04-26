/**
 * This class constructs the obtained image.
 */
class Youwon extends MovableObject {
    
    height = canvas.height;
    width = canvas.width;
    y = 0;
    x = 0;

    constructor() {
        super().loadImage('img/7.Marcadores/Muestra-ícono.png');
    }
}