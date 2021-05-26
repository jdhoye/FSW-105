// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly (arr) {
    let results = arr.filter(function(num1){
        if (num1 >= 5) {
            return true;
        }
    });
    return results;
}
console.log("--- Array Filter #1 ---");
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); // Output: [6, 8]

// 2) Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly (arr) {
    let results = arr.filter(function(num2){
        if (num2 % 2 == 0) {
            return true;
        }
    });
    return results;
}
console.log("--- Array Filter #2 ---");
console.log(evensOnly([3, 6, 8, 2]));  // Output: [6, 8, 2]


//----------Section B


// 1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr) {
    const dblResult = arr.map(function(num3) {
        return num3 * 2;
    });
    return dblResult;
}
 
console.log("---  Array Map #1 ---");
console.log(doubleNumbers([2, 5, 100]));  // Output: [4, 10, 200]


// 2) Take an array of numbers and make them strings
function stringItUp(arr){
    const string = numbers.map(function(number){
        return string.number
    });    
}

console.log("---  Array Map #2 ---");
console.log(stringItUp([2, 5, 100]));  // Output: ["2", "5", "100"]


// 3) Capitalize each of an array of names

function capitalizeNames(arr){
    let capsResult = arr.map(function(str){
        return str[0].toUpperCase() + str.slice(1).toUpperCase();
    });
    return capsResult;
}
console.log("---  Array Map #3 ---"); 
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
//Output: ["John", "Jacob", "Jingleheimer", "Schmidt"]



// Extra Credit 1) Make an array of strings of the names

function namesOnly(arr){
    const nameResult = arr.map(function(name){
        return name.name
    });
    return nameResult;
}

console.log("---  Array Map Extra Credit #1 ---");
console.log(namesOnly([
    {
        names: "Angelina Jolie",
        age: 80
    },
    {
        names: "Eric Jones",
        age: 2
    },
    {
        names: "Paris Hilton",
        age: 5
    },
    {
        names: "Kanye West",
        age: 16
    },
    {
        names: "Bob Ziroll",
        age: 100
    },
]));
//Output: 
// [ "Angelina Jolie", "Eric Jones", "Paris Hilton", "Kanye West", "Bob Ziroll" ]

// Extra Credit 2) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr){
    const stringResults = arr.map(function(string){
        if (string.age >= 17) {
            return string.name + " can see The Matrix";
        } else {
            return string.name + " can not see The Matrix";
        }
    });
    return stringResults;
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kanye West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

//////////// Section C
// 1) Turn an array of numbers into a total of all the numbers

function total(arr){
    const totalResult = arr.reduce(function(num, finalSum){
        finalSum = finalSum + num;
        return finalSum
    });
    return totalResult;
}
console.log("Total of All Numbers: " + total([2, 8, 10]));

// 2) Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr){
    const concatResult = arr.reduce(function(final, num){
        return final.toString() + num.toString();
    });
    return concatResult;
}

console.log(stringConcat([1, 2, 3, 4, 5, 6]))

// 3) Turn an array of voter objects into a count of how many people voted

var voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false},
];

const voteCount = voters.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
}, 0)

console.log(voteCount)

// Extra Credit 1) Given an array of all your wishlist items, return the total cost of all items

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(arr){
    return arr.reduce(function(final, item){
        final += item.price;
        return final;
    }, 0)
};

console.log(shoppingSpree(wishlist));

// Extra Credit 2) Given an array of arrays, flatten them into a single array

var arrays = [
    ["1, 2, 3"],
    [true], 
    [4, 5, 6]
];

var merge = [].concat.apply([], arrays);

console.log(merge)

////// Section D
// 1) Sort an array from smallest number to largest

function leastToGreatest(arr) {
    const result = arr.sort(function(a, b){
        return a - b
    });
    return result;
}
console.log(leastToGreatest([5, 2, 4, 8, 31, 10]));

// 2) Sort an array from largest number to smallest

function greatesToLeast(arr) {
    const result = arr.sort(function(a, b){
        return b - a
    });
    return result;
}
console.log(greatesToLeast([35, 65, 12, 5, 100, 34]));

// 3) Sort an array from shortest string to longest

function lengthSort(arr) {
    const result = arr.sort(function(a, b){
        return a.length - b.length;
    });
    return result;
};

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

// Extra Credit) Sort an array alphabetically

function alphabetical(arr) {
    const result = arr.sort((function (a, b) {
        return a.localeCompare(b);
    }));
    return result;
};

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));