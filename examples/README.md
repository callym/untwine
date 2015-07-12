# examples for untwine

## cycling links
links that cycle through a series of texts when you click on them, but more powerful!
you can set a variable to a value when the text is changed, and even do maths!

#### example one
shows _one_, _two_ or _three_ as a link, sets _variableToSet_ to the value of the string displayed

```
<a data-cyclinglink='{ "variable": "variableToSet", "type": "desc",
"options": [
"one", "two", "three"
]}'></a>
```

#### example two
shows _a_ or _b_, but adds either _1_ or _2_ to _variableToIncrease_

```
<a data-cyclinglink='{ "variable": "variableToIncrease", "type": "mathsadd",
"options": [
["a", 1],
["b", 2]
]}'/></a>
```

#### valid types
| type string   | what it does |
| :------------ | ------------:|
| desc          | sets the variable to the string displayed |
| mathsadd      | adds the value to a variable |
| mathssubtract | subtracts the value from a variable |
| mathsdivide   | divides the variable by a value |
| mathsmultiply | multiplies the variable by a value |
| set           | sets the variable to a value |
