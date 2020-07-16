/**
 * How to create a new Array of one key / value from another Array?
 */


/**
 * With multidimensional array there is always a problem Let say you want to create something like that
 * 
 *  What you have
    var ppl = [
    { id: 12, name: 'Antony Hopkins' },
    { id: 21, name: 'Madonna' },
    { id: 33, name: 'Ozzy Osbourne' },
    { id: 44, name: 'Sylvester Stallone' }
    ];
    What you need
    [12, 21, 33, 44]
 */

var pplIds = ppl.map(function (ppl) {
    return ppl.id
  });
  
//  or ES6
  
const pplIds = ppl.map(ppl => ppl.id);