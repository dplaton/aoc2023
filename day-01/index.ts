import fs from "fs";

const DIGITS: Record<string, string> = {"zero":"0", "one":"1", "two": "2", "three":"3", "four":"4","five":"5","six":"6","seven":"7","eight":"8","nine":"9" };

export class Day01 {
    _input: string[];

    constructor(input: string) {
        this._input =  input.split("\n");;
    }

    getNumberFromLine(line: string) {
        let numbers = [];
        let index = 0;
        console.log(`Parse line ${line}`)
        while (index < line.length) {
            let skip = 1;
            if (line.charCodeAt(index) >= 48 && line.charCodeAt(index) <= 57) {
                numbers.push(line[index]);
            }
            Object.keys(DIGITS).forEach(element => {
                if (line.indexOf(element) === index) {
                    numbers.push(DIGITS[element]);
                    console.log(`Found element ${element}, skipping ${skip}`);
                }
            });
    
            index += skip;
        }
        
        const finalNumber = `${numbers[0]}${numbers[numbers.length-1]}`
        console.log(`Found ${finalNumber} for ${line}`);
        return Number(finalNumber);
    }

    run() {
        let sum = 0;
        this._input.forEach( line => {
            const numberFromLine = this.getNumberFromLine(line);
            sum+=numberFromLine;
        })
        console.log(`Found sum `, sum);
        return sum;
    }

}

function readInput() {
    // to read from file later 
    const fileContents = fs.readFileSync("./day-01/input.txt", "utf-8");

    return fileContents;
}



export function main() {
    const input = readInput();
    const solution = new Day01(input);
    return solution.run();
}
