(function($) {

    $.fn.unorphanize = function( gather ) {

        // if we haven't supplied a number for the number
        // of words to join the orphan, or we supplied
        // it wrong, make it 1.
        if( typeof( gather ) !== "number" ) {
            gather =  1;
        }

        // make it chain-able
        return $(this).each( function() {

            var $el = $(this), htmlEls = [],
            text, els, i, lastIndex, lngth, replaceRegex;

            // "text" is going to be our "goto-girl" for string manipulation
            text = $el.html();

            // grab any html tags like a,strong,em
            els = text.match(/<([A-Z][A-Z0-9]*)\b[^>]*>/gi);
            lngth = ( els !== null ) ? els.length : 0;

            // each time we match a html element opening tag (eg: <a href="">), 
            // save it into array and replace it with a placeholder like: "__n__";
            for( i = 0; i < lngth; i++ ) {
                htmlEls.push( els[i] );
                text = text.replace( els[i] , "__"+i+"__");
            }

            // now we find the given number of gathered words, and then insert a 
            // non-breaking-space (&nbsp;) in to the given number of spaces.
            for( i = 0; i < gather; i++ ) {
                lastIndex = text.lastIndexOf(" ");
                if( lastIndex > 0 ) {
                    text = text.substring(0, lastIndex) + "&nbsp;" + text.substring(lastIndex + 1);
                }
            }
            // now we have put the non-breaking-spaces in, we must replace the 
            // placeholders with the original html elements we stored earlier.
            for( i = 0; i < lngth; i++ ) {
                replaceRegex = new RegExp("__"+i+"__");
                text = text.replace( replaceRegex , htmlEls[i] );
            }

            // and finally replace the html with the sparkly new text string.
            $el.html( text );

        });

    };

}(jQuery));