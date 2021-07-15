## Humanized number with decimal point.

```npm install dcmal.js```

## How it works?


```
const x = (0.00001234).toFixed(2)
// return "0.00" - NO GOOD
```


```
const dcmal = Dcmal({prec: 2})
const x = dcmal.round(0.00001234)
// return "0.000012" - GOOD
```
