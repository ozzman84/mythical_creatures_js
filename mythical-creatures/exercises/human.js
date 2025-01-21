class Human {
    constructor(name) {
        this.name = name;
        this.encounterCounter = 0;
        this.viewsOgre = false;
    }

    noticesOgre() {
        return this.viewsOgre;
    }
}

module.exports = Human;