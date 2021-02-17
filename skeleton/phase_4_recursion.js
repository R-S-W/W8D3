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