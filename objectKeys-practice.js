//challenge 1
//countKeys(obj)
//input: obj - an object
//output: a number, the length of the array
function countKeys(obj) {
  const keys = Object.keys(obj);
  return keys.length;
}
//test passed

//challenge 2
//isEmpty(obj)
//input: obj - an object
//output: a boolean, true if object has NO keys, otherwise false
function isEmpty(obj) {
  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return true;
  } else {
    return false;
  }
}
//test passed

//challenge 3
//longKeys(obj, minLength)
//input: obj - an object, minLength - a number
//output: an array of keys whose length is at least minLength
function longKeys(obj, minLength) {
  const keys = Object.keys(obj);
  const atLeastMinLength = [];

  for (let i = 0; i < keys.length; i++) {
    if (keys[i].length >= minLength) {
      atLeastMinLength.push(keys[i]);
    }
  }

  return atLeastMinLength;
}

//test passed

//challenge 4
//keysByType(obj, type)
//input: obj - an object, type - data type in string
//output: an array of properties that passed the required data type
function keysByType(obj, type) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const arr = [];

  for (let i = 0; i < keys.length; i++) {
    if (typeof values[i] === type) {
      arr.push(keys[i]);
    }
  }

  return arr;
}

//test passed

//challenge 5
//omit(obj, keysToRemove)
//input: obj - an object, keysToRemove - an array
//output: an new object containing the unaffected properties
function omit(obj, keysToRemove) {
  //create a shallow copy of obj to avoid mutation of original object
  const newObj = { ...obj };

  for (let i = 0; i < keysToRemove.length; i++) {
    delete newObj[keysToRemove[i]];
  }

  return newObj;
}

console.log(omit({ a: 1, b: 2, c: 3 }, ["b"]));
console.log(omit({ a: 1, b: 2 }, ["x", "y"]));
console.log(omit({ a: 1, b: 2 }, ["a", "b"]));
