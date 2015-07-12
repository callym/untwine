# untwine
Modular Javascript and CSS for Twine 2 (Snowman)

## what is this?
it's a piece of code you can copy and paste into your Story Javascript in Twine 2.
I was sick of having a really long Story Javascript, where most of the code should really be in modules, so I created a way to use the passages of Twine 2 to act as modules for my code.

## how do I use it?
copy the Story Javascript file into your Story Javascript.
make a new passage.
write your CSS or Javascript straight into the passage.
tag it with "css" or "javascript".
win.

## 'advanced' features
put variables in the scriptData object so other modules (hopefully) won't break them.
push functions onto _showFunctions_ or _hideFunctions_ to have them run when passages change.
tag passages with "high", "medium" or "low" to make sure they run in the order you want.
combine CSS and Javascript in the same file, just tag the module with both "css" and "javascript", put the CSS first in the file, then seperate it from the Javascript with the string "CSS END" (I use _/*---------------*/CSS END/*---------------*/_)
