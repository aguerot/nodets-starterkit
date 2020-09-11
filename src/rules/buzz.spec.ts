import { expect } from 'chai';
import { Rule } from './rule';
import { buzzRule } from './buzz.rule';

describe('Buzz rule test', () => {
    let rule: Rule;

    beforeEach(() => {
        rule = buzzRule;
    });


    it(`Rule should say Buzz`, () => {
        expect(rule.process()).to.equal('Buzz');
    });

    it('Given 5 should apply', () => {
        expect(rule.applies(5)).to.be.true;
    });

    it('Given 10 should apply', () => {
        expect(rule.applies(10)).to.be.true;
    });

    it('Given 3 should not apply', () => {
        expect(rule.applies(3)).to.be.false;
    });
});
