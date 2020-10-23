// Dependencies
var readline = require('readline');

var cli = {};

// kelas perkalian
var tes = /** @class */ (function () {
    function tes(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    tes.prototype.kalikan = function () {
        return this.a * this.b * this.c;
    };
    return tes;
}());

// Init function
cli.init = function(){
  // Send the start message to the console in magenta
  console.log('\x1b[35m%s\x1b[0m',"The CLI is running");

  // Start the interface
  var _interface = readline.createInterface({
    input: process.stdin,
    output : process.stdout,
    prompt : '>'
  });

  var pertanyaan = ["Masukkan bil. a = ", "Masukkan bil. b = ", "Masukkan bil. c = "]
  var arrayOfInputs = [];
  var k = 0;
  var max = 3;
  cli.getUserInput = function(){
    _interface.question(pertanyaan[k], function(str){
      k++;
     arrayOfInputs.push(parseInt(str));
     if(k < max){
       cli.getUserInput();
     } else {
       var kali = new tes(arrayOfInputs[0], arrayOfInputs[1], arrayOfInputs[2]);
       console.log(kali.kalikan());
     }
   });
  };

  cli.getUserInput();

};

cli.init();

// link = https://stackoverflow.com/questions/54369153/take-multiple-inputs-from-user
