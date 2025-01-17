class Stark {
    constructor(params) {
        this.name = params.name;
        this.location = params.location || params.area || 'Winterfell';
        this.safe = false;
        this.houseWords = 'Winter is Coming';
    }

    sayHouseWords() {
        return this.houseWords
    }
}

module.exports = Stark;