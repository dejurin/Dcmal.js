## Humanized number with decimal point.

```npm install dcmal.js```

## How it works?


```
const x = (0.00001254).toFixed(2)
// return "0.00" - NO GOOD
```


```
const { Dcmal } = require('./dist/dcmal.js');

const dcmal = Dcmal({prec: 2})
const x = dcmal.round(0.00001254)
// return "0.000013" - GOOD
```
