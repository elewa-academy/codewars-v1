# [Binary Addition](https://www.codewars.com/kata/binary-addition)

Take in two numbers.

Return their sum represented in base 2, as a String. (one's and zero's, binary)

### index
* [Specs & Tests](#specs-tests)
* [Solution](#solution)
* [Strategy](#strategy)
* [Language Features](#language-features)
* [Notes](#notes)

___

## Specs & Tests

binary\_addition: _Function_
* Arguments: _2_
  * a: _Number_
  * b: _Number_
* Returns: _String_
  * The sum of the two arguments in base 2

```js
Test.describe("binary_addition(1,2)", function() {
  var results1 = addBinary(1,2);
  Test.it("Should return something that isn't falsy", function() {
    Test.expect(results1, "Something is wrong, no results!");
  });
  Test.it("Should return \"11\"", function() {
    Test.assertEquals(results1, "11");
  });
});

// or more clearly:
var result = binary_addition(1,2);

if (!result) {  // should be truthy
  console.log("result is falsey!");
}
console.log(result == "11")
```

[TOP](#binary-addition)

___

## Solution

```js 
function binary_addition(a, b) {
  var sum = a + b;
  return sum.toString(2);
}

```
[PythonTutor](https://goo.gl/kAsDVH)


[TOP](#binary-addition)

___

## Strategy


Add them together as normal numbers (ie. base 10).  Then convert them to a base 2 String.

This strategy is simple because it does the trickiest bit (adding numbers) in base 10 that I'm already familiar with.  Then making the result a string is just a type change.

[TOP](#binary-addition)

___

## Language Features


".toString()" -> converts the number to a String in whatever base is specified.

[TOP](#binary-addition)

___

## [Z1x](https://www.codewars.com/users/Z1x)

```js
function addBinary(a,b) {
  var c = a + b;
  var res = '';
  while (c >= 1) {
    var res = c % 2 + res;
    c = Math.floor(c / 2);
  }
  return res;
}
```

[PythonTutor link](https://goo.gl/YAnrzz)

[TOP](#binary-addition)

___

## Notes

Things I learned studying this problem:


New vocabulary:


Things I struggled with:


Lessons to apply for next time:



[TOP](#binary-addition)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
