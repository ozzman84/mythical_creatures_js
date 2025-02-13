class Skater {
    constructor(params) {
        this.name = params.name;
        this.skill = params.skill;
        this.tricks = params.tricks;
        this.money = params.cash;
        this.frustration = 0;
    }
}

module.exports = Skater;