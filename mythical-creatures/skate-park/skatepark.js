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

        if (this.cost === 0) {
            return `Welcome to the free ${this.name} Skatepark!`
        } else {
            skater.money -= this.cost;
            return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
        }
    }

    
     
}

module.exports = SkatePark;