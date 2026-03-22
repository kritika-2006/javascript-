// use the forEach loop
arr = [2,3,4,5,6];
console.log(arr);
arr.forEach((ele,i,arr) => {
    console.log(ele,i,arr);
    ele*=2;
});
console.log(arr);
// in forEach loop don't change the array but the difference is forOf and forEach loop in forOf loop we don't print the index of the array but in forEach loop we print.