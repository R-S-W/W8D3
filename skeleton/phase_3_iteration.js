

Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (i = 0; i < this.length - 1; i++){
            if (this[i] > this[i+1]){
                [this[i], this[i+1]] = [this[i+1], this[i]];
                sorted= false;
            }
        }
    }
    return this;
}

array = [9,8,7,6,453,6,2,5,1,1,1,1,2,4,4,2,2];
console.log(array.bubbleSort());