import { expect } from 'chai';
import { ContiguousScanner } from './contiguous-scanner';
import { take } from 'rxjs/operators';


describe('Contiguous scanner test', () => {
    let scanner: ContiguousScanner;

    beforeEach(() => {
        scanner = new ContiguousScanner();
    });

    // it('Given 5/6 should emit', async (done) => {
    //     const res = await scanner.contiguous$.toPromise();

    //     scanner.ingest({ in: 5, out: 'Buzz' });
    //     scanner.ingest({ in: 6, out: 'Fizz' });

    //     expect(res.first.in).to.equal(5);
    //     expect(res.second.in).to.equal(6);

    //     done();
    // });

    it('Given 5/6 should emit result', (done) => {
        scanner.contiguous$.pipe(
            take(1)
        ).subscribe(res => {
            expect(res.first.in).to.equal(5);
            expect(res.second.in).to.equal(6);

            done();
        });

        scanner.ingest({ in: 5, out: 'Buzz' });
        scanner.ingest({ in: 6, out: 'Fizz' });
    });

    it('Given 9/10 should emit result', (done) => {
        scanner.contiguous$.pipe(
            take(1)
        ).subscribe(res => {
            expect(res.first.in).to.equal(9);
            expect(res.second.in).to.equal(10);

            done();
        });

        scanner.ingest({ in: 9, out: 'Fizz' });
        scanner.ingest({ in: 10, out: 'Buzz' });
    });

});
