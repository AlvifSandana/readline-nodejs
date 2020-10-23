// compile class dulu dari ts
var tes = /** @class */ (function () {
    function tes(txt) {
        if (txt === void 0) { txt = "hello"; }
        this.teks = txt;
    }
    tes.prototype.show = function () {
        return this.teks;
    };
    return tes;
}());


// fungsi readline
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    var ttt = new tes(name);
    console.log(`Hey there ${ttt.show()}!`);
    readline.close();
});

// link ts readline = https://stackoverflow.com/questions/33858763/console-input-in-typescript/49055758
