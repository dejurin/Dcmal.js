
export interface Options {
  prec: number;
}

export class Dcmal {
  private defaults: Options = {
    prec: 4,
  };

  constructor(
    private options: Options,
  ) {
    this.options = {
      ...this.defaults,
      ...options,
    };
  }
  noExponents(n: number): string {
    const data = String(n).split(/[eE]/);
    if (data.length === 1) return data[0];

    let z = '';
    const sign = n < 0 ? '-' : '';
    const str = data[0].replace('.', '');
    let mag = Number(data[1]);

    if (mag < 0) {
      z =  `${sign}0.`;
      while (mag += 1) z += '0';
      return z + str.replace(/^\-/, '');
    }
    mag -= str.length;
    while (mag -= 1) z += '0';
    return str + z;
  }
  round(n: number, options: Options) {

    const opt = {
      ...this.options,
      ...options,
    };

    const minus = n < 0 ? '-' : '';
    const num: number = Math.abs(n);

    const line = this.noExponents(num);
    const strArr = line.replace(',', '.').split('.');
    let prec: number = opt.prec;

    if (strArr[1] !== undefined) {
      prec = strArr[1].length < opt.prec ? strArr[1].length : opt.prec;
    } else {
      prec = 0;
    }

    if (num < 1 && num > 0) {
      const last: string = strArr[1].replace(/^0+/, '');
      const zl = `0.${last}`;
      const zeros = strArr[1].replace(new RegExp(last, 'g'), '')
      const ending = (parseFloat(zl).toFixed(prec).replace(',', '.').split('.')[1]).replace(/0+$/, '')
      return `${minus}0.${zeros}${ending}`;
    }
    return minus + num.toFixed(prec);
  }
}
