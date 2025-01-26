var Material = require("../src/material.js");

class Craft {
    constructor(params) {
        this.name = params.type;
        this.materials = params.materials;
        this.completed = false;
    }

    completeCraft() {
        this.completed = true;
        return 'All done! It looks great!'
    }

    calculateProjectTotal() {
        let totalCost = 0
    
        for (let i = 0; i < this.materials.length; i++) {
            totalCost += this.materials[i].cost * this.materials[i].quantity
        }
        return totalCost
    }
}

module.exports = Craft;
