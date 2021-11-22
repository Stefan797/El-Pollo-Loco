let canvas;
let world;
let keyboard = new Keyboard();
let screenWidth;

/**
 * Is loaded with onload via the Index.html file.
 * Binds the canvas to a variable in order to be able to work with it.
 * binds the world to one object.
 * Start a timer for two functions.
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    setTimeout(() => {
        hideText();
    }, 6000);

    setTimeout(() => {
        hidedescriptionboxes();
    }, 10000);
}

/**
 * This function adds a class to the div with the corresponding id with the animation to disappear. 
 */
function hideText() {
    document.getElementById('hideplayerdescriptiontext').classList.add('playerdescritiontextgoing');
}


/**
 * This function adds a class to the div with the corresponding id with the animation to disappear. 
 */
function hidedescriptionboxes() {
    document.getElementById('hideplayerdescriptionboxes').classList.add('keyboarddescritionboxesgoing');
}

/**
 * The window.addEventlistener(with "keydown")  is used to register which keys are pressed.
 */
window.addEventListener("keydown", e => {
    const k = e.key;
    // console.log(e);
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 83) {
        keyboard.S = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
    if (e.keyCode == 70) {
        fullscreenopen = true;
        if (fullscreenopen) {
            canvas.requestFullscreen();
        }
    }
    if (e.keyCode == 13) {
        keyboard.ENTER = true;

        if (world.youwin) {
            location.reload();
        }

        if (world.gameover) {
            location.reload();
        }
    }

});

/**
 * The window.addEventlistener (with "keyup") is used to register which keys are no longer pressed.
 */
window.addEventListener("keyup", e => {
    const k = e.key;

    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }

    if (e.keyCode == 13) {
        keyboard.ENTER = false;
    }
    if (e.keyCode == 83) {
        keyboard.S = false;
    }
});
