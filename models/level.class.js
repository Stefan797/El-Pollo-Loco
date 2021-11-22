class Level {
    enemies;
    coins;
    bottles;
    clouds;
    backgroundObjects;
    level_end_x = 6550;

    /**
     * 
     * 
     * @param {object} enemies - chickens endboss
     * @param {object} coins - 
     * @param {object} bottles 
     * @param {object} clouds 
     * @param {object} backgroundObjects 
     */
    constructor(enemies, coins, bottles, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.coins = coins;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }

    getEndboss() {
        return this.enemies.find(e => e instanceof Endboss);
    }
}