const IsogramFinder = function (word) {
    this.word = word.toLowerCase().split("")
}

IsogramFinder.prototype.isIsogram = function () {
    return this.word.every((char, index) => {
        return this.word.indexOf(char) === index
    });
}

module.exports = IsogramFinder;

const isogramFinder = new IsogramFinder('Uncopyrightable');
const isogramFinder1 = new IsogramFinder('NotAnIsogram');
isogramFinder.isIsogram()
isogramFinder1.isIsogram()