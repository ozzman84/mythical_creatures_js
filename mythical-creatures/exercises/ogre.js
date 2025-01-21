class Ogre {
    constructor(params) {
        this.name = params.name;
        this.home = params.abode || 'Swamp';
        this.swings = 0;
    }

    encounter(human) {
        human.encounterCounter++;

        if (human.encounterCounter % 3 === 0) {
            human.viewsOgre = true;
            this.swingAt(human);
        } else {
            human.viewsOgre = false;
        }
    }

    swingAt(human) {
        this.swings++;
    }
}

module.exports = Ogre;