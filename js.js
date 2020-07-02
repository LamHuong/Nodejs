function foo(head, tail){

return [head, ...tail]; //expression
}

function bar(){
var a1= [2,3];
var a2= [6,7,8,10];

var [head] = a1;  // => array destructring:  [name-variable] = array ** để nhận biết đk destructring thì nó phải dùng phép gán "="**
// vd array destructr 
//[a,c] = a1;
//=> a = a1[1];
//=> c = a1[2];


var [, ...tail] = a2; // assignment phep gan => [7,8,9] 
return foo(head, tail);
}
