/**
 * This class constructs the gameover image.
 */
class GameoverObject extends DrawableObject {
    height = 600;
    width = 600;
    y = -90;
    x = 50;

    constructor() {
        super().loadImage('img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png');
    }
}