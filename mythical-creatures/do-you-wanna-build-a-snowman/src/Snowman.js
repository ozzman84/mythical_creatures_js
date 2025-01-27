class Snowman {
    constructor(params) {
        this.carrots = params.carrots;
        this.coal = params.coal;
        this.buttons = params.buttons;
        this.snowballs = params.snowballs;
        this.magicHat = false;
    }

    canWearMagicHat() {
        this.magicHat = true;
    }
}

module.exports = Snowman;