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
    5`
    
    before(() => {
        day01 = new Day01(dummyInput);
    })

    it('should calculate the sum', () => {
        expect(day01.run()).to.equal(336);
    })
})