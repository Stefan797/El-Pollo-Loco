let canvas; // exist global 
let world;
let keyboard = new Keyboard();
let screenWidth;

/**
 * This function is loaded with onload at index.html 
 * line 12 assigns the variable the id from canvas element from html 
 * the v world is a Object with variables
 * @param {string} - global existens v that all js can use the canvas from html
 */

function init() {
    canvas = document.getElementById('canvas'); // the V canvas is the canvas from our html
    world = new World(canvas, keyboard);

    if (window.innerWidth < 800) {
        canvas.width = window.innerWidth;
    }

    setTimeout(() => {
        hideText();
    }, 6000);

    setTimeout(() => {
        hidedescriptionboxes();
    }, 10000);

    // console.log('My Character is', world.character); // Give the Paht How as a Json 
}

function hideText() {
    document.getElementById('hideplayerdescriptiontext').classList.add('playerdescritiontextgoing');
}

function hidedescriptionboxes() {
    document.getElementById('hideplayerdescriptionboxes').classList.add('keyboarddescritionboxesgoing');
}

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
});

function myFunc(e) {
    e.preventDefault();
    let clientX = e.touches[0].clientX;
    let clientY = e.touches[0].clientY;
    console.log(clientX, clientY);
    if (touchOnBottlesymbole(clientX, clientY)) {
        world.keyboard.D = true;
    }

    if (touchOnArrowUp(clientX, clientY)) {
        world.keyboard.SPACE = true;
    }

    if (touchOnArrowLeft(clientX, clientY)) {
        world.keyboard.LEFT = true;
    }

    if (touchOnArrowRight(clientX, clientY)) {
        world.keyboard.RIGHT = true;
    }
}

function touchOnArrowUp(clientX, clientY) {
    return world.arrowUp.isColliding({ x: clientX, y: clientY, width: 50, height: 50 });
}

function touchOnArrowRight(clientX, clientY) {
    return world.arrowRight.isColliding({ x: clientX, y: clientY, width: 50, height: 50 });
}

function touchOnArrowLeft(clientX, clientY) {
    return world.arrowLeft.isColliding({ x: clientX, y: clientY, width: 50, height: 50 });
}

function touchOnBottlesymbole(clientX, clientY) {
    return world.bottlesymbole.isColliding({ x: clientX, y: clientY, width: 50, height: 50 });
}

function myFunc2(e) {
    e.preventDefault();
    world.keyboard.RIGHT = false;
    world.keyboard.SPACE = false;
    world.keyboard.LEFT = false;
    world.keyboard.D = false;
}