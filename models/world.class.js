class World { 

    character = new Character(); 
    gameOverObject = new GameoverObject();
    youwinObject = new Youwon();
    level = level1;
    canvas;
    ctx;
    keyboard;
    gameover = false;
    youwin = false;
    countedcoins = 0;
    countedbottles = 0;
    bottlesymbole = new Bottlesymbole();
    arrowUp = new Uparrow();
    arrowRight = new Rightarrow();
    arrowLeft = new Leftarrow();
    camera_x = 0;
    statusBarBottles = new BottleBar();
    statusBar = new StatusBar();
    statusBarcoins = new StatusBarCoins();
    throwableObjects = [];
    throw_sound = new Audio('audio/throw.mp3');
    requestDraw;

    constructor(canvas, keyboard) { // warum this
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        requestAnimationFrame(this.draw.bind(this));
        this.setWorld();
        this.testing();
    }

    setWorld() {
        this.character.world = this;
        this.level.getEndboss().world = this;
    }

    testing() {
        setInterval(() => {
            this.checkforCollisionsBottleswithEndboss();
            this.checkforCollisionsCharacterwithBottles();
            this.checkforCollisionsCharacterwithCoins();
            this.checkforCollisions();
            this.checkforCollisionjumponChicken();
            this.checktheBottlesStatusBar();
            this.checkTrowObjects();
            this.checkforGameover();
            this.checkforWin();

        }, 200);
    }

    checkforWin() {
        if (this.youwin) {
            cancelAnimationFrame(this.requestDraw);
            this.drawyouwin();
        }
    }

    drawyouwin() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToMap(this.youwinObject);
        this.ctx.beginPath();
        this.ctx.fillStyle = "#32ABCF";
        this.ctx.fillRect(45, 30, 30, 50); // x y breite höhe
        this.ctx.font = "40px Arial";
        this.ctx.fillStyle = "#FCFDFE";
        
        this.ctx.fillText(this.countedbottles, 45, 70);
        this.ctx.fillStyle = "#32ABCF";
        this.ctx.fillRect(120, 30, 30, 50); // x y breite höhe
        this.ctx.font = "40px Arial";
        this.ctx.fillStyle = "#FCFDFE";
        this.ctx.fillText("0", 125, 70);

        this.ctx.fillStyle = "#32ABCF";
        this.ctx.fillRect(200, 30, 40, 50); // x y breite höhe
        this.ctx.font = "40px Arial";
        this.ctx.fillStyle = "#FCFDFE";
        this.ctx.fillText(this.countedcoins, 200, 70);

        this.ctx.font = "100px Arial";
        this.ctx.fillStyle = "#FCFDFE";
        this.ctx.fillText("You Win", 150, 240); // Text  x   y

        this.ctx.stroke();

    }

    checkforGameover() {
        if (this.gameover) {
            cancelAnimationFrame(this.requestDraw);
            this.drawGameover();
        }

    }

    drawGameover() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToMap(this.gameOverObject);
    }

    checkTrowObjects() {

        if (this.keyboard.D) {
            if (this.countedbottles >= 1) {
                this.countedbottles--;
                console.log('number is', this.countedbottles);
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObjects.push(bottle);
                this.throw_sound.play();
            }


        }
    }

    checkforCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    checkforCollisionjumponChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isCollidingtop(enemy)) {
                console.log('collision');
                let position = this.level.enemies.indexOf(enemy);
                this.level.enemies.splice(position, 1);
            }
        });
    }



    checkforCollisionsCharacterwithCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                let position = this.level.coins.indexOf(coin);
                this.level.coins.splice(position, 1);
                this.countedcoins += 1;
                this.statusBarcoins.setPercentage(this.countedcoins);
            }
        });
    }


    checkforCollisionsCharacterwithBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                let position = this.level.bottles.indexOf(bottle);
                this.level.bottles.splice(position, 1);
                this.countedbottles++;
                console.log('number is', this.countedbottles);
                this.checktheBottlesStatusBar();
            }
        });
    }

    checktheBottlesStatusBar() {
        this.statusBarBottles.setPercentage(this.countedbottles);
    }

    checkforCollisionsBottleswithEndboss() {
        this.throwableObjects.forEach((throwableObject) => {
            if (this.level.getEndboss().isColliding(throwableObject)) {

                console.log('collision with Endboss, energy', this.level.getEndboss().energy);
                this.level.getEndboss().hit();

            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);


        if (window.innerWidth < 1200) {
            this.ctx.translate(-this.camera_x, 0); // back
            this.addToMap(this.bottlesymbole);
            this.ctx.translate(this.camera_x, 0); // Forwards

            this.ctx.translate(-this.camera_x, 0); // back
            this.addToMap(this.arrowUp);
            this.ctx.translate(this.camera_x, 0); // Forwards

            this.ctx.translate(-this.camera_x, 0); // back
            this.addToMap(this.arrowLeft);
            this.ctx.translate(this.camera_x, 0); // Forwards

            this.ctx.translate(-this.camera_x, 0); // back
            this.addToMap(this.arrowRight);
            this.ctx.translate(this.camera_x, 0); // Forwards 
        }

        this.ctx.translate(-this.camera_x, 0); // back
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0); // Forwards


        this.ctx.translate(-this.camera_x, 0); // back
        this.addToMap(this.statusBarcoins);
        this.ctx.translate(this.camera_x, 0); // Forwards

        this.ctx.translate(-this.camera_x, 0); // back
        this.addToMap(this.statusBarBottles);
        this.ctx.translate(this.camera_x, 0); // Forwards

        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);



        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        this.requestDraw = requestAnimationFrame(this.draw.bind(this));


    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);

        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);



        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}