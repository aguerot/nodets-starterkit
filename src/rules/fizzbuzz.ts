import { Rule } from '.';

export const fizzbuzzRule: Rule = {
    applies: input => input % 3 === 0 && input % 5 === 0,
    process: _ => 'Fizzbuzz'
};