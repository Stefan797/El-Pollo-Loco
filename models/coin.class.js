/**
 * This class constructs the coins and executes functions from change images and values.
 */
class Coin extends MovableObject {

    width = 60;
    height = 60;

    constructor() {
        super().loadImage('img/8.Coin/Moneda1schnitt.png');
        this.x = Math.floor(Math.random() * 6000) + 400;
        this.y = Math.floor(Math.random() * 360) + 20;
    }


}