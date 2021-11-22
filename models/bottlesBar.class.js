class BottleBar extends DrawableObject {

    // collected bottles of StatusBar pictures
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/100_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/0_.png'
    ];

    /**
     * 
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 30;
        this.y = 100;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    /**
     * ??
     * 
     * @param {number} percentage - 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * This function returns the number for the correct position in the array
     * 
     * @returns number from one to five
     */
    resolveImageIndex() {
        if (this.percentage <= 2) {
            return 5;
        } else if (this.percentage <= 5) {
            return 4;
        } else if (this.percentage <= 7) {
            return 3;
        } else if (this.percentage <= 9) {
            return 2;
        } else if (this.percentage <= 15) {
            return 1;
        } else {
            return 0;
        }
    }
}