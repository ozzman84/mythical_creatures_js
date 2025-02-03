class LunchBox {
    constructor(params) {
        this.owner = params.owner;
        this.material = params.madeOf;
        this.shape = params.shape;
        this.color = params.color;
        this.snacks = [];
    }

    acquireSnack(snack) {
        this.snacks.push(snack);
        snack.isInLunchBox = true;
    }

    findHealthySnacks() {
        let healthySnacks = [];

        for (let i = 0; i < this.snacks.length; i++) {
            let snack = this.snacks[i].type.toLowerCase()

            if (snack.endsWith('fruit')) {
                healthySnacks.push(this.snacks[i].type);
            }
        }
        return healthySnacks
    }
}

module.exports = LunchBox;