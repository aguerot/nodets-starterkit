import { Rule } from '.';

/**
 * Catch all rule
 * 
 * @param num 
 */
export const stringRule: Rule = {
    applies: _ => true,
    process: input => `${input}`
};
