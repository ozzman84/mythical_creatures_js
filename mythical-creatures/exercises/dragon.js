class Dragon {
    constructor(name, rider, hungry) {
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.eat_count = 0;
    }

    greet() {
        return `Hi, ${this.rider}!`
    }

    eat() {
        this.eat_count++;
        if(this.eat_count == 3) {
            this.hungry = false;
        }
    }
}

module.exports = Dragon;
