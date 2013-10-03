jQuery Unorphanize
--------------------
A small jQuery method for preventing orphans in text.  
`~ 500 bytes minified`  

###How it works
```js 
$(".selector").unorphanize();
```
**Unorphanize** will take the jQuery selector (` $(".selector")`) you supply 
and without disturbing theinner html's markup will **replace the last space** 
with an `&nbsp;` preventing an [orphan](http://en.wikipedia.org/wiki/Widows_and_orphans)
from occurring.


If you wish the last line to have more than 2 words, you can supply an argument in `number` format like so:
```js
$(".selector").unorphanize(2);
```

--------------------
###example

    A Line of text which wraps and leaves an
    orphan.
    
would change to:

    A line of text which wraps and leaves 
    an orphan.
    
and with `$(".selector").unorphanize(2);` we get:

    A line of text which wraps and 
    leaves an orphan.
