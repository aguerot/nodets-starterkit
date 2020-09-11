import { Rule } from '.';

export const fizzRule: Rule = {
    applies: input => input % 3 === 0,
    process: _ => 'Fizz'
};