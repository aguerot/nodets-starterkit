import { fizzbuzz } from './fizzzbuzz';
import { ContiguousScanner } from './contiguous-scanner';

const scanner = new ContiguousScanner();
scanner.contiguous$.subscribe(({ first, second}) => console.log(`${first.in}/${second.in} (${first.out}-${second.out})`));

const results = Array.from({ length: 101 })
    .map((_, index) => {
        const said = fizzbuzz.say(index);
        scanner.ingest({ in: index, out: said })
        return `${index} => ${said}`
    });

console.log(results.join('\n'));
