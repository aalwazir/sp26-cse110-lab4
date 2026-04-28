### 1.
The bug is that num1 and num2 are being read as strings instead of numbers so they are being added together using string concatenation instead of addition.

### 2.
To fix this, we would need to convert num1 and num2 to numbers before adding them. Line 9 would need to be changed to:
```js
let result = Number(num1) + Number(num2);
```