import { Rule } from './rule';

export const fizzbuzzRule: Rule = {
    applies: input => input % 3 === 0 && input % 5 === 0,
    process: input => 'Fizzbuzz'
};