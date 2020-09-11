import { expect } from 'chai';
import { Rule, stringRule } from '.';

describe('String rule test', () => {
    let rule: Rule;

    beforeEach(() => {
        rule = stringRule;
    });

    it(`Given a number should return it as string`, () => {
        for (let index = 0; index <= 100; index++) {
            expect(rule.process(index)).to.be.equal(`${index}`);
        }
    });

    it(`Rule should always apply`, () => {
        for (let index = 0; index <= 100; index++) {
            expect(rule.applies(index)).to.be.true;
        }
    });

});
