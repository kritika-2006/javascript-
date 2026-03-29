// print 1 to 10 but with delay of 1 sec after each number gets printed

for(let i =1;i<=10;i++){
    setTimeout(function(){
        console.log(11-i);
    },i*1000) // 1 sec
}

setTimeout(function(){
    console.log("hello");
},2*1000); // 2 sec