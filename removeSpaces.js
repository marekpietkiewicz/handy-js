/**
 * How to remove spaces in string using JavaScript
 */

var str = "T E S T"  
str = str.replace(/\s/g,'');  
// Output 'TEST'  

var str = "T E S T"  
str = str.replace(/\s/g,'-');  
// Output 'T-E-S-T'