import { Rule } from './rule';

export const fizzRule: Rule = {
    applies: input => input % 3 === 0,
    process: input => 'Fizz'
};