import { fizzbuzzRule } from './rules/fizzbuzz.rule';
import { fizzRule } from './rules/fizz.rule';
import { buzzRule } from './rules/buzz.rule';
import { stringRule } from './rules/string.rule';
import { Rule } from './rules/rule';
import { zeroRule } from './rules/zero.rule';

export type FizzBuzz = {
    say: (input: number) => string;
};

// provide your implementation feels free to create new files etc...
export const fizzbuzz: FizzBuzz = {
    say: input => fizzbuzzRunner.run(input)
};

export const fizzbuzzRunner = {

    run: (input: number): string => {

        // rule order is important as find bellow takes first match
        const rules: Rule[] = [
            zeroRule,
            fizzbuzzRule,
            fizzRule,
            buzzRule,
            stringRule,
        ];

        // find 1st applicable rule
        // always at least one rule applies thanks to catch-all stringrule
        const applicableRule = rules.find(r => r.applies(input));

        return applicableRule.process(input);
    }
};
