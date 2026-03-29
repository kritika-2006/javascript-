// Callback function ek asa function hota h jo ek function ke andar pass hota h

function product(a,b,c){
    return a*b*c;
}

function fun(x,y){
    let a =x(2,3,4);
    console.log(a-y);
}

fun(product,7);