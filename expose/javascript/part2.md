### 1.
Line 12 prints:
```js
3
```
Line 12 prints 3 because i was declared with var inside the for loop which means it is still accessible outside the for loop since it has function scope. The for loop runs 3 times since the prices array has length 3.

### 2.
Line 13 prints:
```js
150
```
This happens because discountedPrice was declared with var inside the for loop but var has function scope so it is still accessible outside the for loop. On the last loop iteration the code that runs is
```js
var discountedPrice = 300 * (1 - 0.5)
```
which sets discountedPrice to 150.

### 3.
Line 14 prints:
```js
150
```
This happens because finalPrice was declared with var so it can be accessed anywhere in the function. On the last loop iteration the code that runs is
```js
finalPrice = Math.round(150 * 100) / 100
```
which outputs 150.


### 4. 
The function returns
```js
[50, 100, 150]
```
This happens because the function loops through the prices array [100, 200, 300] and applies a 50% (0.5) discount on each price and pushes it into the discounted array.

### 5.
```js
ReferenceError: i is not defined
```
This happens because i is declared with let which means it is only defined in the block of the for loop where it was declared. However on line 12, we try to access i so the code throws an error since i only exists in the for loop.

### 6. 
```js
ReferenceError: discountedPrice is not defined
```
This happens because discountedPrice is declared with let which means it is only defined in the block of the for loop where it was declared. However on line 13, we try to access discountedPrice so the code throws an error since it only exists in the for loop.

### 7.
Line 14 prints:
```js
150
```
Line 14 prints 150 because finalPrice is declared with let in the function block outside the for loop so it can still be accessed anywhere within the function.

### 8.
The function returns
```js
[50, 100, 150]
```
This happens because discounted was declared with let in the function block outside the for loop so it can still be accessed anywhere within the function. The variable discounted pushed the finalPrice from each iteration which is the price from the prices array after a discount of 50% (0.5) is applied.

### 9.
```js
ReferenceError: i is not defined
```
Line 11 throws an error because i is declared with let which means it is only defined in the block of the for loop where it was declared. However on line 11, we try to access i so the code throws an error since i only exists in the for loop.

### 10.
```js
3
```
This happens because length declared with const at the beginning of the function stores the length of the prices array.

### 11.
The function returns
```js
[50, 100, 150]
```
This works because even though discounted was declared with const, there is no error thrown because the array itself is not being reassigned. Only the contents are being changed using .push() to add a new item. Also, even though discountedPrice is being declared with const, it is being re-declared in every loop iteration.

### 12.
#### A.
```js
student.name
```
#### B.
```js
student['Grad Year']
```
#### C.
```js
student.greeting()
```
#### D.
```js
student['Favorite Teacher'].name
```
#### E.
```js
student.courseLoad[0]
```

### 13.
#### A.
```js
32
```
The + operator with a string does string concatenation.
#### B.
```js
1
```
The - operation converts the string to a number.
#### C.
```js
3
```
The null converts to 0.
#### D.
```js
3null
```
The + operation with a string does string concatenation so null becomes 'null'.
#### E.
```js
4
```
The boolean true converts to 1.
#### F.
```js
0
```
The boolean false converts to 0 and null converts to 0.
#### G.
```js
3undefined
```
The + operation with a string does string concatenation.
#### H.
```js
NaN
```
The - operator tries to convert both values to numbers but undefined becomes NaN.
### 14.
#### A.
```js
true
```
'2' is converted to the number 2.
#### B.
```js
false
```
Both values are strings so they are compared lexicographically and '1' comes before '2'.
#### C.
```js
true
```
== allows type conversion so '2' becomes 2.
#### D.
```js
false
```
=== does not allow type conversion.
#### E.
```js
false
```
true converts to 1.
#### F.
```js
true
```
Boolean(2) becomes true.
### 15.
The operator ```==``` checks if two values are equal while allowing type conversion and ```===``` checks if two values are equal without type conversion meaning to output true the values must have the same data type and value.

### 17. 
It would return:
```js
[2, 4, 6]
```
This happens because the second parameter in the function call takes in the doSomething(num) function which multiplies a num by 2. So in modifyArray, the for loop loops through the inputted array and performs the doSomething function on each item and then pushes it into a new array. After the for loop is done, the new array is returned. So, line 13 returns an array where each item is multiplied by 2.

### 19.
The output is:
```js
1
4
3
2
```
This happens because lines 2 and 5 print first while lines 3 and 4 are scheduled using the setTimeout() function and do not run immediately. Line 4 has a delay of 0 milliseconds but still waits for the normal code to finish running so it prints 3 after 4 is printed. Line 3 has a 1000 milliseconds so the 2 prints after 1 second.