
var newLetter = require("./letter.js");
var list = ["apple"];


var wordMake = function (guess) {
    this.letters = [];
    this.returnWord = function (guess) {
        //this.letters.push(new newLetter(guess.split("")));
        //console.log(new newLetter(guess.split("")));
        for(var i = 0; i < this.letters.length; i++){
            
            var yes = new newLetter(guess.split(""));
            //console.log(yes.letterGuessed(yes));
            console.log(yes)
        }
        //console.log(guess.letters);
    }
    this.checkGuess = function (guess) {
        for(var j = 0; j < this.letters.length; j++){
        letterCheck(guess);
        }
    }
};

module.exports = wordMake;
                    