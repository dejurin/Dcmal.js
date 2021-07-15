export interface Options {
    prec: number;
}
export declare class Dcmal {
    private options;
    private defaults;
    constructor(options: Options);
    noExponents(n: number): string;
    round(n: number, options: Options): string;
}
