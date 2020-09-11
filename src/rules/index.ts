
export type Rule = {
    applies: (num: number) => boolean,
    process: (input?: number) => string,
};

export { fizzRule } from './fizz';
export { buzzRule } from './buzz';
export { fizzbuzzRule } from './fizzbuzz';
export { zeroRule } from './zero';
export { stringRule } from './string';