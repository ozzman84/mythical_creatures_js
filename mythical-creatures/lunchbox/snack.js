class Snack {
    constructor(type) {
        this.type = type;
        this.isInLunchBox = false;
        this.deliciousLevel = 'extra';
        this.amount = 100;
    }

    getEaten() {
        this.amount -= 10;
    }
}

module.exports = Snack;