const test = require('tape')

const { Dcmal } = require('./dist/dcmal.js');
const dcmal = new Dcmal({ prec: 5 });

test('Dcmal(): valid params', t => {
    t.equal('1', dcmal.round(1.0), 'should return 1')
    t.equal('-1', dcmal.round(-1.0, {}), 'should return -1')
    t.equal('1.24', dcmal.round(1.235, { prec: 2 }), 'should return 1.24')
    t.equal('0.00012', dcmal.round(0.00012, { prec: 2 }), 'should return 0.00012')
    t.equal('0.000012', dcmal.round(0.000012, { prec: 2 }), 'should return 0.000012')
    t.equal('0.0000012', dcmal.round(0.0000012, { prec: 2 }), 'should return 0.0000012')
    t.equal('0.0001235', dcmal.round(0.0001235, { prec: 4 }), 'should return 0.0001235')
    t.equal('0.0000001235', dcmal.round(0.0000001235, { prec: 4 }), 'should return 0.00000012345')
    t.equal('0.000013', dcmal.round(0.00001254, { prec: 2 }), 'should return 0.000013')
    t.equal('1', dcmal.round(1.00, { prec: 2 }), 'should return 1')
    t.equal('0.123', dcmal.round(0.1234, { prec: 3 }), 'should return 0.123')
    t.equal('0.0123', dcmal.round(0.01234, { prec: 3 }), 'should return 0.0123')
    t.equal('0.00123', dcmal.round(0.001234, { prec: 3 }), 'should return 0.00123')
    t.equal('0.000123', dcmal.round(0.0001234, { prec: 3 }), 'should return 0.000123')
    t.equal('0.0000123', dcmal.round(0.00001234, { prec: 3 }), 'should return 0.0000123')
    t.equal('0.00000123', dcmal.round(0.000001234, { prec: 3 }), 'should return 0.00000123')
    t.equal('0.000000123', dcmal.round(0.0000001234, { prec: 3 }), 'should return 0.000000123')
    t.equal('0.0000000123', dcmal.round(0.00000001234, { prec: 3 }), 'should return 0.0000000123')
    t.equal('0.00000000123', dcmal.round(0.000000001234, { prec: 3 }), 'should return 0.00000000123')
    t.equal('0.000000000123', dcmal.round(0.0000000001234, { prec: 3 }), 'should return 0.000000000123')
    t.equal('0.0000000001234567812', dcmal.round(0.00000000012345678115, { prec: 10 }), 'should return 0.000000000123')
    t.end()
})