import { expect } from "chai";
import { FizzBuzz, fizzbuzz } from './fizzzbuzz';

describe('FizzBuzz test', () => {
    let fb: FizzBuzz;

    beforeEach(() => {
        fb = fizzbuzz;
    });

    it('Given 2 should say "2"', () => {
        expect(fb.say(2)).to.equal('2');
    });

});
