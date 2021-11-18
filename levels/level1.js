function getCoins(size) {
    let array = [];
    for (let index = 0; index < size; index++) {
        array.push(new Coin());
    }
    return array;
}

function getBottles(size) {
    let array = [];
    for (let index = 0; index < size; index++) {
        array.push(new Bottle());
    }
    return array;
}


const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],

    getCoins(18),
    getBottles(12),

    [
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud()
    ],

    [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 4),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 4),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 4),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 4),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 5),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 5),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 5),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 5),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 6),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 6),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 6),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 6),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 7),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 7),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 7),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 7),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 8),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 8),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 8),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 8),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 9),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 9),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 9),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 9)
    ]
);