class StatusBarCoins extends DrawableObject {
    
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/Verde/100_copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/80_copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/60_copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/40_copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/20_copia.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/0_.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 30;
        this.y = 50;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);

    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage <= 5) {
            return 5;
        } else if (this.percentage <= 8) {
            return 4;
        } else if (this.percentage <= 10) {
            return 3;
        } else if (this.percentage <= 12) {
            return 2;
        } else if (this.percentage <= 15) {
            return 1;
        } else {
            return 0;
        }
    }
}