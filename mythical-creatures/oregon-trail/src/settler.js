class Settler {
    constructor(params) {
        this.name = params.name;
        this.age = params.age;
        this.nationality = params.nationality || 'unknown';
        this.status = 'healthy';
        this.ailments = [];
    }
}

module.exports = Settler;