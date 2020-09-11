import { expect } from 'chai';
import { Rule, buzzRule } from './index';

describe('Buzz rule test', () => {
    let rule: Rule;
    const pivot = 5;

    beforeEach(() => {
        rule = buzzRule;
    });

    it(`Given ${pivot - 1 } should not apply`, () => {
        expect(rule.applies(pivot + 1)).to.be.false;
    });

    it(`Rule should say Buzz`, () => {
        expect(rule.process()).to.equal('Buzz');
    });

    it(`Given ${pivot} should apply`, () => {
        expect(rule.applies(pivot)).to.be.true;
    });

    it(`Given ${2* pivot} should apply`, () => {
        expect(rule.applies(2 * pivot)).to.be.true;
    });

});
