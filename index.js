console.log(` █     █░▓█████  ██▓     ▄████▄   ▒█████   ███▄ ▄███▓▓█████     ▐██▌ 
▓█░ █ ░█░▓█   ▀ ▓██▒    ▒██▀ ▀█  ▒██▒  ██▒▓██▒▀█▀ ██▒▓█   ▀     ▐██▌ 
▒█░ █ ░█ ▒███   ▒██░    ▒▓█    ▄ ▒██░  ██▒▓██    ▓██░▒███       ▐██▌ 
░█░ █ ░█ ▒▓█  ▄ ▒██░    ▒▓▓▄ ▄██▒▒██   ██░▒██    ▒██ ▒▓█  ▄     ▓██▒ 
░░██▒██▓ ░▒████▒░██████▒▒ ▓███▀ ░░ ████▓▒░▒██▒   ░██▒░▒████▒    ▒▄▄  
░ ▓░▒ ▒  ░░ ▒░ ░░ ▒░▓  ░░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒░   ░  ░░░ ▒░ ░    ░▀▀▒ 
  ▒ ░ ░   ░ ░  ░░ ░ ▒  ░  ░  ▒     ░ ▒ ▒░ ░  ░      ░ ░ ░  ░    ░  ░ 
  ░   ░     ░     ░ ░   ░        ░ ░ ░ ▒  ░      ░      ░          ░ 
    ░       ░  ░    ░  ░░ ░          ░ ░         ░      ░  ░    ░    
                        ░                                            
                                                                     
                                                                     
                                                                  `);

var wordMake = require("./word.js");
//var newLetter = require("./letter.js")
var inquirer = require("inquirer");

//var pick = new newLetter("e");
var pick = new wordMake();
pick.returnWord("apple");


 inquirer.prompt([{
     type: "input",
     name: "guess",
     message: "Guess a letter real quick?"
 }])
 .then(function(response){
     checkGuess(response.guess);
 })

 
