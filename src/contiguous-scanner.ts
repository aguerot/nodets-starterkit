import { Subject, Observable } from 'rxjs';
import { filter, map, pairwise, first } from 'rxjs/operators';

export type FizzbuzzItem = {
    number: number,
    says: string
};

export class ContiguousScanner {

    private _sequences = [
        'FizzBuzz',
        'BuzzFizz',
    ];

    private _subject = new Subject<FizzbuzzItem>();

    private _obs$ = this._subject.asObservable().pipe(
        pairwise(),
        filter(([ first, second]) => 
                        Math.abs(first.number - second.number) === 1 && // numbers are contiguous
                        this._sequences.includes(`${first.says}${second.says}`)), // sequence match
        map(([first, second]) => ({ first, second })),
    );



    ingest(item: FizzbuzzItem) {
        this._subject.next(item);
    }

    get contiguous$(): Observable<{ first: FizzbuzzItem, second: FizzbuzzItem }> {
        return this._obs$;
    }
}