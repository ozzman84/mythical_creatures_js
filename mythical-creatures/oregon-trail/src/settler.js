class Settler {
    constructor(params) {
        this.name = params.name;
        this.age = params.age;
        this.nationality = params.nationality || 'unknown';
        this.status = 'healthy';
        this.ailments = [];
    }

    experienceDistress(distress) {
        if (this.status === 'dead') return;
    
        this.ailments.push(distress);
        this.updateStatus();
    }

    updateStatus() {
        let ailmentsCount = this.ailments.length

        if (ailmentsCount > 2) {
            this.status = 'dead';
        } else if (ailmentsCount === 2) {
            this.status = 'poor';
        } else if (ailmentsCount === 1) {
            this.status = 'fair';
        }
    }

    heal() {
        if (this.status === 'dead') {
            return `Sorry, we can\'t heal a corpse. ${this.name.charAt(0).toUpperCase() + this.name.slice(1)} needs a proper burial!`
        }
        this.status = 'healthy'
        this.ailments = [];
    }
}

module.exports = Settler;