var newLetter = function(a){
    this.secretLetter = a;
    this.guessed = false;
    this.letterGuessed = function(a){
        if(this.guessed){
            return a + " "
        }
        else{
            return "_ ";
        }
        
    }
    this.letterCheck = function(guess){
        if(guess == this.secretLetter){
            console.log("You've guess a letter!");
            this.guessed = true;
        }
        else{
            console.log("That letter ain't there! Try again!");
        }
    }
}


module.exports = newLetter;