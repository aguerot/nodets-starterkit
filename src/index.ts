import { fizzbuzz } from './fizzzbuzz';

const results = Array.from({ length: 101 })
                     .map((_, index) => `${index} => ${fizzbuzz.say(index)}`);

console.log(results.join('\n'));
