
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


Array.prototype.myReduce = function(callback) {
    
}
