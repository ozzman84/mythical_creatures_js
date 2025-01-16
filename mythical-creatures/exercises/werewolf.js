class Werewolf {

    constructor(name) {
        this.name = name;
        this.form = 'human';
    };

    completeTransformation() {
        if (this.form == 'human') {
            this.form = 'wolf';
            return 'Aaa-Woooo!';
        } else {
            this.form = 'human';
            return 'Where are I?';
        }
    };
}

module.exports = Werewolf;