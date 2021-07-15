
export interface Options {
    prec: number;
}

class Dcmal {
    private defaults: Options = {
        prec: 4
    };

    constructor(
        private options: Options,
    ) {
        this.options = {
            ...this.defaults,
            ...options,
        };
    }
    _noExponents(n: number): string {
        var data = String(n).split(/[eE]/);
        if (data.length == 1) return data[0];

        var z = '',
            sign = n < 0 ? '-' : '',
            str = data[0].replace('.', ''),
            mag = Number(data[1]) + 1;

        if (mag < 0) {
            z = sign + '0.';
            while (mag++) z += '0';
            return z + str.replace(/^\-/, '');
        }
        mag -= str.length;
        while (mag--) z += '0';
        return str + z;
    }
    round(n: number, options: Options) {

        const opt = {
            ...this.options,
            ...options,
        };

        let minus = n < 0 ? '-' : ''
        n = Math.abs(n)

        let line = this._noExponents(n)
        let strArr: Array<String> = line.replace(",", ".").split(".")
        let prec: number = opt.prec

        if (strArr[1] !== undefined) {
            prec = strArr[1].length < opt.prec ? strArr[1].length : opt.prec
        } else {
            prec = 0
        }

        if (n < 1 && n > 0) {
            let last = /${strArr[1]}/
            return minus + "0." + strArr[1].replace(last, "") + parseFloat("0." + last).toFixed(prec).replace(",", ".").split(".")[1]
        } else {
            return minus + n.toFixed(prec)
        }
    }
}