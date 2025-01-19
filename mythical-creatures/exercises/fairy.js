class Fairy {
    constructor(name, dust = 10) {
        this.name = name;
        this.dust = dust;
        this.clothes = {dresses: ['Iris']};
        this.disposition = 'Good natured';
        this.humanWards = [];
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

    becomeProvoked() {
        this.disposition = 'Vengeful';
    }

    replaceInfant(infant) {
        if (this.disposition === 'Vengeful') {
            infant.disposition = 'Malicious';
            this.humanWards.pop(infant);
        } else {
            return infant
        }
    }
}

module.exports = Fairy;