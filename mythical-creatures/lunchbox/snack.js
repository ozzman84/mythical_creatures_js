class Snack {
    constructor(type) {
        this.type = type;
        this.isInLunchBox = false;
        this.deliciousLevel = 'extra';
        this.amount = 100;
        this.cuttingItClose = false;
        this.lowThreshold = this.amount * .2;
    }

    getEaten() {
        this.amount -= 10;
        
        if (this.amount <= this.lowThreshold) {
            this.cuttingItClose = true;
        }
    }

    checkForHealthy() {
        let snack = this.type.toLowerCase();
        return snack.endsWith('fruit');
    }
}

module.exports = Snack;