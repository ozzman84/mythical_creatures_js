class SkatePark {
    constructor(params) {
        this.name = params.name;
        this.yearFounded = params.year;
        this.style = params.type;
        this.features = params.features;
        this.isPrivate = params.isPrivate || false;
        this.cost = params.price || 0;
        this.occupants = [];
    }
}

module.exports = SkatePark;