function twice(ele){
    return 2*ele;
}
let arr = [2,4,6,8];
console.log(arr);
let brr = arr.map(twice);
console.log(brr);
//another method
let b = [ 4,5,6,8];
b = b.map(function(ele){
    return ele*ele;
});
console.log(b);
// another method
let a = [1,2,3,4];
console.log(a);
   a = a.map(ele => ele+10);
console.log(a);
