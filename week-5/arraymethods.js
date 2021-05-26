var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.

vegetables.pop();
console.log("Vegetables: " + vegetables);

// 2. Remove the first item from the fruit array.

fruit.shift();
console.log("Fruits: " + fruit)

// 3. Find the index of "orange."

var indexOfOrange = fruit.findIndex(function(x) {
    return x == "orange";
})
console.log ("The index of orange is: " + indexOfOrange);

// 4. Add that number to the end of the fruit array.

fruit.push(indexOfOrange);
console.log ("Fruit: " + fruit);

// 5. Use the length property to find the length of the vegetable array.

var vegetableLength = vegetables.length;
console.log ("The lenth of the vegetables are: " + vegetableLength);

// 6. Add that number to the end of the vegetable array.

vegetables.push(vegetableLength);
console.log("Vegetables: " + vegetables);


// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".

var food = fruit.concat(vegetables);
console.log ("New Array: " + food);

// 8. Remove 2 elements from your new array starting at index 4 with one method.

food.splice(4, 2);
console.log ("Remove 2 Elements and Results are: " + food)

// 9. Reverse your array.

food.reverse();
console.log ("Reversed: " + food);

// 10. Turn the array into a string and return it.

food.toString();
console.log(food);
