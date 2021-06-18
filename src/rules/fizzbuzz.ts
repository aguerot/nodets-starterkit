import { buzzRule, fizzRule, Rule } from '.';

export const fizzbuzzRule: Rule = {
    applies: input => fizzRule.applies(input) && buzzRule.applies(input),
    process: _ => 'Fizzbuzz'
};