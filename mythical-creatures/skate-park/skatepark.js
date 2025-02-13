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

    admit(skater) {
        if (this.cost > skater.money) {
            return `Sorry, you don't have enough money.`;
        } else if (this.occupants.length >= 3) {
            return 'Sorry, we are at max capacity. Thank you for understanding.'
        }
        this.occupants.push(skater);
        console.log(this.occupants)
     }
}

module.exports = SkatePark;