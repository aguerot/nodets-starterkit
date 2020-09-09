import { Rule } from './rule';

export const buzzRule: Rule = {
    applies: input => input % 5 === 0, 
    process: input => 'Buzz',
};