import { Rule } from './rule';

/**
 * Catch all rule
 * 
 * @param num 
 */
export const stringRule: Rule = {
    applies: input => true,
    process: input => `${input}`
};