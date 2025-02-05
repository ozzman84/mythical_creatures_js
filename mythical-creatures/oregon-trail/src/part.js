class Part {
    constructor(type) {
        this.type = type;
        this.broken = false;
        this.repairCount = 0;
    }

    break() {
        this.broken = true;
    }

    repair() {
        if (this.repairCount >= 1) {
            return `This ${this.type} has seen better days, we\'ll need a brand new one!`
        }
    
        this.broken = false;
        this.repairCount++;
    }
}

module.exports = Part;