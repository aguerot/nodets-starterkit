
const say = (input: number) => input.toString(); 
const results = Array.from({ length: 101 })
                     .map((_, index) => `${index} => ${say(index)}`);

console.log(results.join('\n'));
