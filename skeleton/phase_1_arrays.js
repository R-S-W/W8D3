

function uniq(array){
    let new_array = [];
    array.forEach(  function(ele) {
        if (!new_array.includes(ele)){
            new_array.push(ele);
        }
    });

    return new_array;
}

console.log(uniq([1,1,4,4,4,3,2,2,2]));