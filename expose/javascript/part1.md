### 1.
```js
values added:  20
```

### 2.
```js
final result:  20
```

### 3.
We should not use var because it has a function scope instead of a block scope. So this can make code confusing because in this example result was declared in the if block but was still accessed outside. This can cause naming conflicts and unexpected behavior.

### 4.
```js
values added:  20
```

### 5.
```js
ReferenceError: result is not defined
```
Line 13 throws an error because result was declared with let which means it is only defined in the if block. Using let means the variable has block scope.

### 6.
```js
TypeError: Assignment to constant variable.
```
Line 7 throws an error because result was declared with a const which means that a const variable cannot be reassigned. This means that the code never gets to line 9.

### 7.
```js
TypeError: Assignment to constant variable.
```
Nothing is printed by line 13 because the code throws an error on line 7.