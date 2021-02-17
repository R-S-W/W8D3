function range(start, end) {
    if (start > end) {return [];}
    if (start === end) {return [start];}
    return [start].concat(range(start+1, end));
}

console.log(range(1,10));

function sumRec(arr) {
    if (arr.length === 0) {return 0;}
    return arr.pop() + sumRec(arr);
}

console.log(sumRec([1,2,3,4,5,6,7]));

function exponent(base, exp) {
    if (exp === 0) {return 1;}
    return base * exponent(base, exp - 1);
}

console.log(exponent(2, 5));



function exponent_2(base, exp){
    if (exp === 0) { return 1; }
    if (exp===1){return base;}
    if (exp%2 === 0){return exponent_2(base,exp/2)**2;}
    else{return base*exponent_2(base, (exp-1)/2)**2;}
}
console.log(exponent_2(2, 6));
console.log(exponent_2(2, 7));




function fibonacci(n){
    if (n ===1){return [1]; }
    if (n===2){return [1,1];}
    if (n <1){return [];}

    return fibonacci(n-1).push(2);  //.push(  fibonacci(n-1)[n-2] +fibonacci(n-1)[n-1] );
}
console.log(fibonacci(5));






