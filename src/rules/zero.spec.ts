import { expect } from 'chai';
import { Rule, zeroRule } from '.';

describe('Zero rule test', () => {
    let rule: Rule;

    beforeEach(() => {
        rule = zeroRule;
    });

    it(`Rule should say '0'`, () => {
        expect(rule.process(0)).to.equal('0');
    });

    it(`Given 0 should apply`, () => {
        expect(rule.applies(0)).to.be.true;
    });

    it(`Given 1 should not apply`, () => {
        expect(rule.applies(1)).to.be.false;
    });

});
