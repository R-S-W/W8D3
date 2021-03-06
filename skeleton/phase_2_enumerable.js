
Array.prototype.myEach = function(callback){
    for (i = 0; i< this.length; i++){
        let a =  callback(this[i]);
        console.log(a);
    }
}
let add2 = function(num){
    return num + 2;
}
let array = [1,2,3];
// array.myEach(add2);



Array.prototype.myMap = function(callback){
    let newArray = [];
    for (i=0; i< this.length; i++){
        newArray.push(callback(this[i]));
    }
    return newArray;
}
console.log(array.myMap(add2));


Array.prototype.myReduce = function(callback, initialValue) {
    if (this.length === 0) { return null; }
    let acc = initialValue || this[0];
    let i = 0;
    if (acc === this[0]) { i++; }
    
    for (; i < this.length; i++) {
        acc = callback(acc, this[i]);
    }
    return acc;

}

let accTest = function (acc, el) {
    return acc + el;}

console.log(array.myReduce(accTest));

console.log(array.myReduce(accTest, 25));