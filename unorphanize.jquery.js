$.fn.unorphanize = function( gather ) {
  
  // if we haven't supplied a number for the number
  // of words to join the orphan, or we supplied
  // it wrong, make it 1.
  if( typeof( gather ) !== "number" ) {
    gather =  1;
  }
  
  // make it chain-able
  return $(this).each( function() {
    
    var $el = $(this),
      htmlEls = [],
      text, el, els, orphansExp, i,
      replaceOrphans, lngth, replaceRegex;

    // "text" is going to be our "goto-girl" for string manipulation
    text = $el.html();

    // grab any html tags like a,strong,em
    els = text.match(/<([A-Z][A-Z0-9]*)\b[^>]*>/gi);

    // each time we match a html element opening tag (eg: <a href="">), 
    // save it into array and replace it with a placeholder like: "__n__";
    for( el in els ) {
      htmlEls.push( els[el] );
      text = text.replace( els[el] , "__"+el+"__");
    }

    // now we find the given number of gathered words, and then insert a 
    // non-breaking-space (&nbsp;) in to the given number of spaces.
    orphansExp = new RegExp("( (\\S)+){"+gather+"}$");
    
    if( text.match( orphansExp ) ) {
      
      replaceOrphans = text
        .match( orphansExp )[0]
        .replace( /\s/gi , "&nbsp;" );

      text = text.replace( orphansExp , replaceOrphans );
    
    }

    // now we have put the non-breaking-spaces in, we must replace the 
    // placeholders with the original html elements we stored earlier.
    lngth = htmlEls.length;
    for( i = 0; i < lngth; i++ ) {
      replaceRegex = new RegExp("__"+i+"__");
      text = text.replace( replaceRegex , htmlEls[i] );
    }
    
    // and finally replace the html with the sparkly new text string.
    $el.html( text );
    
  });
  
};

