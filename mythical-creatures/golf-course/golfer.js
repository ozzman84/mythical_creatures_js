class Golfer {
    constructor(params) {
        this.name = params.name;
        this.handicap = params.handicap;
        this.frustration = 0;
        this.confidence = 0;
    }

    calculateAvg(par) {
        return `I usually shoot a ${par + this.handicap} on average.`
    }

    playRound(golfCourse) {
        if (golfCourse.difficulty === 'hard') {
            this.frustration += 500;
            return;
        }

        this.frustration += 100;
    }

    hitTheRange() {
        this.confidence += 10;
    }

    marvel(golfCourse) {
        return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
    }
}

module.exports = Golfer;