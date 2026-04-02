let arr = [1,-3,6,4,0,-5];
console.log(arr);
// decreasing order sort
arr = arr.sort((a,b)=> b-a);
console.log(arr);

// abs sort
arr = arr.sort((a,b) => Math.abs(a) - Math.abs(b)); 
console.log(arr);