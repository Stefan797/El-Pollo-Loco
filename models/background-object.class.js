class BackgroundObject extends MovableObject {
    
    width = 720;
    height = 500;

    /**
     * ??
     * 
     * @param {string} imagePath -  Path to the picture
     * @param {number} x - coordinate x to the image
     * @param {number} y - coordinate y to the image
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}