function twice(ele){
    return 2*ele;
}
let arr = [2,4,6,8];
console.log(arr);
let brr = arr.map(twice);
console.log(brr);
//another method

let a = [1,2,3,4];
console.log(a);
let b = a.map(function add10(ele){
    return ele+10;
});
console.log(b);
