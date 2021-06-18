import { fizzbuzz } from './fizzzbuzz';
import { ContiguousScanner } from './contiguous-scanner';

const scanner = new ContiguousScanner();
scanner.contiguous$.subscribe(({ first, second}) => console.log(`${first.number}/${second.number} (${first.says}-${second.says})`));

const results = Array.from({ length: 101 })
    .map((_, index) => {
        const said = fizzbuzz.say(index);
        scanner.ingest({ number: index, says: said })
        return `${index} => ${said}`
    });

console.log(results.join('\n'));
