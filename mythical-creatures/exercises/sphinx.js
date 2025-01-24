class Sphinx {
    constructor(name = null) {
        this.name = name;
        this.riddles = [];
        this.heroesEaten = 0;
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
    
        if (start > this.riddles.length && this.riddles.length === 0) {
            return 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"Halfway, after that it\'s running out.\"???'
        } else if (start > this.riddles.length) {
            return 'That wasn\'t that hard, I bet you don\'t get the next one'
        } else {
            this.heroesEaten++;
        }
    }
}

module.exports = Sphinx;