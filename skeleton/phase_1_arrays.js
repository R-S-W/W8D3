

Array.prototype.uniq = function() {
    let new_array = [];
    this.forEach(  function(ele) {
        if (!new_array.includes(ele)){
            new_array.push(ele);
        }
    });

    return new_array;
}

console.log([1,1,4,4,4,3,2,2,2].uniq());

Array.prototype.twoSum = function() {
    let pairArray = [];
    for(let i = 1; i < this.length; i++) {
        for(let j = 0; j < i; j++) {
            if(this[i] + this[j] === 0) {
                pairArray.push([j, i]);
            }
        }
    }
    return pairArray;
}

console.log([1, -1, 2, -2, 3, 4, -3, 0, 0].twoSum());


Array.prototype.transpose = function() {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push([])
        for (let j = 0; j < this.length; j++) {
            newArray[newArray.length - 1].push(this[j][i]);
        }
    }
    return newArray;
}

console.log(
   [[1,2,3],
    [4,5,6],
    [7,8,9]].transpose()
);



