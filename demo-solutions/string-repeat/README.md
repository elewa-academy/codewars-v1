# [String Repeat](https://www.codewars.com/kata/string-repeat/train/javascript)

This challenge is simply to take an old string and concatenate it to itself n times.

### index
* [Specs & Tests](#specs-tests)
* [Solution](#solution)
* [Strategy](#strategy)
* [Language Features](#language-features)
* [Notes](#notes)

___

## Specs & Tests

string\_repeat: _Function_
* Arguments: _2_
  * num: _Number_
  * str: _String_
* Returns: _String_
  * Returns a new string that is made up of the original string repeated n times.

```js
describe("Tests", function() {
  it ("Basic tests", function() {
    Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
  });
});

// or more clearly
console.log(repeatStr(3, "*") == "***");
console.log(repeatStr(5, "#") == "#####");
console.log(repeatStr(2, "ha ") == "ha ha ");
```


[TOP](#string-repeat)

___

```js 
function string_repeat(num, str) {

  return str.repeat(num);

};

```
[PythonTutor](https://goo.gl/hR4mCj)

[TOP](#string-repeat)

___

## Strategy

I take in the number and the string to repeat, then use the built-in JavaScript "repeat" method to repeat the string.

[TOP](#string-repeat)

___

## Language Features

String.prototype.repeat(n) -> It returns a new string which is the old one repeated n times.

[TOP](#string-repeat)


___

## Notes

Things I learned studying this problem:


New vocabulary:


Things I struggled with:


Lessons to apply for next time:



[TOP](#string-repeat)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
