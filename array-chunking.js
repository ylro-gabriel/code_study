function chunkArrayInGroups(array, size){
    const arrayCopy = array.slice();
    const arrayGrouped= []

    while(arrayCopy.length > 0){
        arrayGrouped.push(arrayCopy.splice(0, size))
    }

    return arrayGrouped;
}

const test = chunkArrayInGroups(["a", "b", "c", "d"], 2)
console.log(test);
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))
