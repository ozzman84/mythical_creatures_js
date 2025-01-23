class Sphinx {
    constructor(name = null) {
        this.name = name;
        this.riddles = [];
    }

    collectRiddle(riddle) {
        this.riddles.push(riddle);

        if (this.riddles.length > 3) {
            this.riddles.shift();
        }
    }

    attemptAnswer(answer) {
        this.riddles = this.riddles.filter(riddle => riddle.answer !== answer);
    }
}

module.exports = Sphinx;