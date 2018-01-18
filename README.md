jQuery Unorphanize
--------------------
A small jQuery method for preventing or stopping orphans (widows) in text, paragraphs or whatever (unhindered by HTML).  
`~ 500 bytes minified`  

### How it works
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

### Why it's better than "Plugin X"
Unorphanize will recognize if you have HTML elements, and not ruin them: Most other plugins will do it a bit faster, 
__*but*__ they will ignore HTML tags and put the space before/after them, or they will just not work. 
They may also put the __*space inside of a html*__ entity like: `<a&nbsp;href="#">blah</a>` which as you can imagine is useless.  
You should, however, _run it before you bind events_ to inner dom elements, or you may lose those events. Or you can 
[delegate events from the parent](http://api.jquery.com/on/#direct-and-delegated-events) element.


### Example

    A Line of text which wraps and leaves an
    orphan.
    
would change to:

    A line of text which wraps and leaves 
    an orphan.
    
and with `$(".selector").unorphanize(2);` we get:

    A line of text which wraps and 
    leaves an orphan.
