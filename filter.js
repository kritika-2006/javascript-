let arr = [3,5,6,4,8];
console.log(arr);

// filter means remove the element

// filter out even elements
arr = arr.filter((ele)=>{
   if(ele%2!=0) return true;
    else return false;
});
console.log(arr);

//or ques
let brr = [1,2,3,5,6];
console.log(brr);
brr = brr.filter (ele=> (ele<5));
console.log(brr);
