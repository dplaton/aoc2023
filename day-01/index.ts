import fs from "fs";

const dummyInput = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

const DIGITS: Record<string, string> = {"zero":"0", "one":"1", "two": "2", "three":"3", "four":"4","five":"5","six":"6","seven":"7","eight":"8","nine":"9" };

function readInput() {
    // to read from file later 
    const fileContents = fs.readFileSync("./day-01/input.txt", "utf-8");

    return fileContents;
}

function getNumberFromLine(line: string) {
    let numbers = [];
    let index = 0;

    while (index < line.length) {
        let skip = 1;
        if (line.charCodeAt(index) >= 48 && line.charCodeAt(index) <= 57) {
            numbers.push(line[index]);
        }
        Object.keys(DIGITS).forEach(element => {
            if (line.indexOf(element) === index) {
                numbers.push(DIGITS[element]);
                skip = DIGITS[element].length;
            }
        });

        index += skip;
    }
    
    const finalNumber = `${numbers[0]}${numbers[numbers.length-1]}`
    console.log(`Found ${finalNumber} for ${line}`);
    return Number(finalNumber);
}


export function main() {

    const input = readInput();
    const inputLines = input.split("\n");
    let sum = 0;
    inputLines.forEach( line => {
        const numberFromLine = getNumberFromLine(line);
        sum+=numberFromLine;
    })
    console.log(`Found sum `, sum);
    return sum;
}
