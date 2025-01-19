class Fairy {
    constructor(name, dust = 10) {
        this.name = name;
        this.dust = dust;
        this.clothes = {dresses: ['Iris']};
    }

    receiveBelief() {
        this.dust++;
    }

    believe() {
        this.dust += 10;
    }

    makeDresses(dresses) {
        this.clothes.dresses = [...this.clothes.dresses, ...dresses];
    }
}

module.exports = Fairy;