const Direwolf = require('./direwolf')

class Stark {
    constructor(params) {
        this.name = params.name;
        this.location = params.location || params.area || 'Winterfell';
        this.safe = false;
        this.houseWords = 'Winter is Coming';
    }

    sayHouseWords() {
        return this.houseWords
    }

    callDirewolf(name, location) {
        var direwolf = new Direwolf(name, this.location);
        direwolf.protect(this);
        return direwolf
    }
}

module.exports = Stark;