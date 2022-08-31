const IsogramFinder = function (word) {
    this.word = word.toLowerCase().split("")
}

IsogramFinder.prototype.isIsogram = function () {
    return this.word.every((char, index) => {
        return this.word.indexOf(char) === index
    });
}

module.exports = IsogramFinder;
