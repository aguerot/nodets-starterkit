import { expect } from 'chai';
import { Rule } from './rule';
import { fizzRule } from './fizz.rule';

describe('Fizz rule test', () => {
    let rule: Rule;
    const pivot = 3;

    beforeEach(() => {
        rule = fizzRule;
    });

    it(`Rule should say Fizz`, () => {
        expect(rule.process()).to.equal('Fizz');
    });

    it(`Given ${pivot - 1} should not apply`, () => {
        expect(rule.applies(pivot - 1)).to.be.false;
    });

    it(`Given ${pivot} should apply`, () => {
        expect(rule.applies(pivot)).to.be.true;
    });

    it(`Given ${2*pivot} should apply`, () => {
        expect(rule.applies(2*pivot)).to.be.true;
    });

});
