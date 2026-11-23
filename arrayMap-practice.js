//challenge 1: doubleAll(numbers)
//input: numbers - an array of numbers
//output: a new array with every number multiplied by 2
function doubleAll(numbers){
    const numbersDoubled = numbers.map((num) => num * 2);

    return numbersDoubled;
}

//challenge 2: shout(words)
//input: array of strings
//output: a new array of stings all caps and with ! at the end
function shout(words){
    const wordsUpdated = words.map((word) => word.toUpperCase() + "!")

    return wordsUpdated;
}

//challenge 3: getLengths(names)
//input: names - array of strings
//output: length of the names

function getLengths(names){
    const namesLength = names.map((name) => name.length)

    return namesLength;
}

//challenge 4: getNames(users)
//input: users - array of objects
//output: array of strings (names only of the users)

function getNames(users){
    const usersNames = users.map((user) => user.name)

    return usersNames;
}

//challenge 5: addDiscount(products)
//input: array of objects
//output: a new array with discounted price (10%)
function addDiscount(products){
    const discountedPrice = products.map((product) => ({
        name: product.name,
        salePrice: product.price * 0.9
    }))

    return discountedPrice;
}

//challenge 5b: addTax(items)
//input: array of objects
//output: new array of objects

function addTax(items){
    const itemsTotalCost = items.map((item) => ({
        title: item.title,
        totalCost: item.cost * 1.2
    }))

    return itemsTotalCost;
}

//test cases:
const items = [
  { title: "Lamp", cost: 50 },
  { title: "Desk", cost: 200 },
  { title: "Mug", cost: 5 }
];

console.log(addTax(items));
// [
//   { title: "Lamp", totalCost: 60 },
//   { title: "Desk", totalCost: 240 },
//   { title: "Mug", totalCost: 6 }
// ]

console.log(items[0]);     // { title: "Lamp", cost: 50 }  (original unchanged!)
console.log(addTax([]));   // []