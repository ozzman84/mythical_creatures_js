class Gear {
    constructor(type, quantity) {
        this.type = type;
        this.quantity = quantity;
    }

    checkForValidity() {
        switch (this.type) {
            case 'food':
                return this.type
            case 'ammunition':
                return 'Great, we\'ll need lots of ammunition!'
            case 'clothes':
                return this.type
            default:
                this.type = null
                return 'I don\'t think a mp3 player will help us.'
        }
    }
}

module.exports = Gear;