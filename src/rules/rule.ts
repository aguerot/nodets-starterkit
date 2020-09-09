
export type Rule = {
    applies: (num: number) => boolean,
    process: (input?: number) => string,
};
