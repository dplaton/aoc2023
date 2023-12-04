import {expect} from 'chai';
import {Day01} from './index.js';

describe('Day 1 test suite', () => {
    let day01: Day01;

    const dummyInput = `two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen
    5
    eighthree`
    
    before(() => {
        day01 = new Day01(dummyInput);
    })

    it.skip('should calculate the sum', () => {
        expect(day01.run()).to.equal(419);
    })

    it(`should treat edgecases`, () => {
        const testCases:Record<string, number> = {
            "eighthree": 83,
            "sevenine": 79,
            "5": 55
        };

        Object.keys(testCases).forEach( (line)=> {
            expect(day01.getNumberFromLine(line)).to.equal(testCases[line]);
        });

    })
})