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
}

module.exports = Settler;