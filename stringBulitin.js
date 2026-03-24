let s = "Kritika";
console.log(s);
console.log(s.toUpperCase());
s.toUpperCase(); // it dosen't work on single 
let s2 = s.toUpperCase(); // it works when we store the another string
console.log(s,s2);
console.log(s.toLowerCase());

let b = "  kritika batra ";
console.log(b,b.length);
// trim cut the spaces from first and last not mid
let b2 = b.trim();
console.log(b2,b2.length);
console.log(b2.indexOf('t'));
// this two functons are same
console.log(b2.charAt(4));
console.log(b2[5]);

let a = "kritikabatra";
console.log(a.slice(4)); //substring from index i to end
console.log(s.slice(2,5)); //substring from index i to j-1
a2 = a.slice(2,4);
console.log(a,a2);

let c = "Hi, How are you";
console.log(c);
let arr = c.split('');
//forOf loop
for (const ele of arr) {
    console.log(ele);
}