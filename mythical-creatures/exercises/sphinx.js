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
        var start = this.riddles.length

        this.riddles = this.riddles.filter(riddle => riddle.answer !== answer);
        if (start > this.riddles.length) {
            return 'That wasn\'t that hard, I bet you don\'t get the next one'
        }
    }
}

module.exports = Sphinx;