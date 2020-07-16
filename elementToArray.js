/**
 * How to add element to the Array in JavaScript
 */


//Using push(), element will be added to the end of an Array
var list = ["foo", "bar"];
list.push("baz");
//["foo", "bar", "baz"]

//Unshift() the same as above but at the beginning of an Array
var list = ["foo", "bar"];
list.unshift("baz");
//["baz", "foo", "bar"]

//Using splice() we can add the element in the middle
var list = ["foo", "bar"];
list.splice( 1, 0, "baz"); 
// ["foo", "baz", "bar"]

//Create a new array and combine both using concat()
var list = ["foo", "bar"];
var newlist = list.concat( ["baz", "qux"] );
// ["foo", "bar", "baz", "qux"]

//Using the index notation
varlist = ["foo", "bar"];
list[2] = "baz";
list[3] = "qux";
// ["foo", "bar", "baz", "qux"]

varlist = ["foo", "bar"];
list[ list.length ] = "baz";
// ["foo", "bar", "baz"]