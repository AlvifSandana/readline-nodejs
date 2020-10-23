// link = https://stackoverflow.com/questions/33858763/console-input-in-typescript

import * as readline from 'readline';

var cli = {};

class tes {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    kalikan() {
        return this.a * this.b * this.c;
    }
}


class Cli {
    k: number;
    max: number;
    arrIn: string[] = [];
    arrQ: string[] = [];


    constructor(k: number, max: number) {
        this.k = k;
        this.max = max;
    }

    init() {
        let pointer = this.k;
        let maks = this.max;
        let input = [];
        // Send the start message to the console in magenta
        console.log('\x1b[35m%s\x1b[0m', "The CLI is running");

        // Start the interface
        let _interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: '>'
        });

        let getUserinput = () => {
            _interface.question(this.arrQ[pointer], function (str: string) {
                pointer++;
                input.push(parseInt(str));
                if (pointer < maks) {
                    getUserinput();
                } else {
                    let kali = new tes(input[0], input[1], input[2]);
                    console.log(kali.kalikan());
                    _interface.close()
                }
            });
        }
        getUserinput();
    }
}

let terminal = new Cli(0, 3);
terminal.arrQ.push("Masukkan bil. a = ");
terminal.arrQ.push("Masukkan bil. b = ");
terminal.arrQ.push("Masukkan bil. c = ");
terminal.init();
