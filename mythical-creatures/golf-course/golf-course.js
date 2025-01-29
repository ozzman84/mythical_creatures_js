class GolfCourse {
    constructor(name, difficulty, openings, features) {
        this.name = name;
        this.difficulty = difficulty;
        this.openings = openings;
        this.features = features;
        this.currentlyPlaying = [];
    }

    checkInGroup(group) {
        if (group.length <= this.openings) {
            for (let i = 0; i < group.length; i++) {
                this.currentlyPlaying.unshift(group[i].name)
            }
            this.openings -= group.length
        }
        
    }
}

module.exports = GolfCourse;