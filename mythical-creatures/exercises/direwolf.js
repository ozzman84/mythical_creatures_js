class Direwolf {
    constructor(name, home = 'Beyond the Wall', size = 'Massive') {
        this.name = name;
        this.home = home;
        this.size = size;
        this.starksToProtect = [];
        this.huntsWhiteWalkers = true;
    }

    protect(stark) {
        if (stark.location == this.home && this.starksToProtect.length < 2) {
            stark.safe = true;
            stark.houseWords = 'The North Remembers';
            this.huntsWhiteWalkers = false;
            this.starksToProtect.push(stark);
        }
    }

    leave(stark) {
        this.starksToProtect.filter(person => person === stark)
    }
}

module.exports = Direwolf;