import { Subject, Observable } from 'rxjs';
import { filter, map, pairwise, first } from 'rxjs/operators';

export type FizzbuzzItem = {
    in: number,
    out: string
};

export class ContiguousScanner {
    private _categories = [
        'Fizz',
        'Buzz'
    ];
    private _subject = new Subject<FizzbuzzItem>();

    private _obs$ = this._subject.asObservable().pipe(
        pairwise(),
        filter(([ first, second]) => 
                        Math.abs(first.in - second.in) === 1 && // numbers are contiguous
                        this._categories.includes(first.out) && // first is in target list
                        this._categories.includes(second.out)), // second is also in target list
        map(([first, second]) => ({ first, second })),
    );



    ingest(item: FizzbuzzItem) {
        this._subject.next(item);
    }

    get contiguous$(): Observable<{ first: FizzbuzzItem, second: FizzbuzzItem }> {
        return this._obs$;
    }
}