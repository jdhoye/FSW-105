
// Extra Credit) Make a filtered list of all the people who are old enough to see The Matrix (17+).
function ofAge(arr){
    // your code here
    const peopleWhoCanSeeTheMatrix = ofAge.filter(function(legal) {
        if (legal.age >= 17){
            return true
        }
    })
        
}
console.log("--- Extra Credit for .filter() Method ---");
console.log(ofAge[
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])
//Output: 
//[ { name: "Angelina Jolie", age: 80 },
//    { name: "Bob Ziroll", age: 100 } ]

console.log(peopleWhoCanSeeTheMatrix);


const users = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kanye West", age: 16},
    { name: "Bob Ziroll", age: 100}
]

const peopleWhoCanSeeTheMatrix = users.filter(function(user) {
    if (user.age >= 17){
        return true
    }
})

console.log(peopleWhoCanSeeTheMatrix);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]