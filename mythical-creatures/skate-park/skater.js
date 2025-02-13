class Skater {
    constructor(params) {
        this.name = params.name;
        this.skill = params.skill;
        this.tricks = params.tricks;
        this.money = params.cash;
        this.frustration = 0;
    }

    practice(trick) {
        if (!this.tricks[trick]) {
            this.frustration++;
            if (this.frustration === 3) {
                this.frustration = 0;
                return this.learnNewTrick(trick);
            }
        }
    }
}

module.exports = Skater;