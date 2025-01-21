class Human {
    constructor(name) {
        this.name = name;
        this.encounterCounter = 0;
        this.viewsOgre = false;
        this.knockedOut = false;
    }

    noticesOgre() {
        return this.viewsOgre;
    }
}

module.exports = Human;