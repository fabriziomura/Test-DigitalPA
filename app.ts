import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Menu
rl.on("line", (input) => {
    const args = input.trim().split(' ');
    const command = args[0];
    const options = args.slice(1);
    switch(command){
        case "rollDice":
            const diceNum = parseInt(options[0]);
            const sidesNum = parseInt(options[1]);
            console.log(rollDice(diceNum,sidesNum));
            rl.close();
            break;
        case "findWaldo": 
            console.log(findWaldo(input));
            rl.close();
            break;
        case "easterDate":
            const year = parseInt(options[0]);
            if(options.includes("-m") || options.includes("--monthonly") || options.includes("—monthonly")){
                console.log(easterDateMonth(year, true));
            } else {
                console.log(easterDate(year));
            }
            rl.close();
            break;
        default:
            rl.close();
    }
})


//rollDice[diceNumber] [sides] default numbers
function rollDice(diceNumber: number = 1, sides: number = 6): number{
    let tot = 0;
    for(let i = 0; i < diceNumber; i++){
        let num = Math.floor(Math.random() * sides) + 1;
        tot += num
    }
    return tot;
}

//findWaldo <string>
function findWaldo(input: string): string{
    const noCommand = input.split(" ").slice(1);
    const allWords = noCommand.join(" ");
    if(allWords.includes("Waldo")){
        return "Waldo was found."
        
    } else {
        return "Error: Waldo was not found."
    }
}

//easterDate <year>
function easterDate(inputYear: number): string{    
    const a = inputYear % 19;
    const b = Math.floor(inputYear / 100);
    const c = inputYear % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;

    return day.toString().padStart(2,"0") + "/" + month.toString().padStart(2,"0")  + "/" + inputYear;
    
}

//easterDate options -m, —monthonly
function easterDateMonth(inputYear: number, monthOnly: boolean = false): string{
    const date = easterDate(inputYear);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthIndex = parseInt(date.split("/")[1]) - 1;
    const monthName = monthNames[monthIndex]
    return monthName;
  }














 