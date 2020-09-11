import { Rule } from '.';

export const buzzRule: Rule = {
    applies: input => input % 5 === 0, 
    process: _ => 'Buzz',
};