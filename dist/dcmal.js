"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dcmal = void 0;
class Dcmal {
    constructor(options) {
        this.options = options;
        this.defaults = {
            prec: 4,
        };
        this.options = Object.assign(Object.assign({}, this.defaults), options);
    }
    noExponents(n) {
        const data = String(n).split(/[eE]/);
        if (data.length === 1)
            return data[0];
        let z = '';
        const sign = n < 0 ? '-' : '';
        const str = data[0].replace('.', '');
        let mag = Number(data[1]);
        if (mag < 0) {
            z = `${sign}0.`;
            while (mag += 1)
                z += '0';
            return z + str.replace(/^\-/, '');
        }
        mag -= str.length;
        while (mag -= 1)
            z += '0';
        return str + z;
    }
    round(n, options) {
        const opt = Object.assign(Object.assign({}, this.options), options);
        const minus = n < 0 ? '-' : '';
        const num = Math.abs(n);
        const line = this.noExponents(num);
        const strArr = line.replace(',', '.').split('.');
        let prec = opt.prec;
        if (strArr[1] !== undefined) {
            prec = strArr[1].length < opt.prec ? strArr[1].length : opt.prec;
        }
        else {
            prec = 0;
        }
        if (num < 1 && num > 0) {
            const last = strArr[1].replace(/^0+/, '');
            const zl = `0.${last}`;
            const zeros = strArr[1].replace(new RegExp(last, 'g'), '');
            const ending = (parseFloat(zl).toFixed(prec).replace(',', '.').split('.')[1]).replace(/0+$/, '');
            return `${minus}0.${zeros}${ending}`;
        }
        return minus + num.toFixed(prec);
    }
}
exports.Dcmal = Dcmal;
//# sourceMappingURL=dcmal.js.map