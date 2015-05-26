//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Person [A] Drives, Person [B] Assists
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. Write your own forEach function. It takes the array and the function (referred to as a callback) as arguments:

function forEach(list, callback) { /* Do stuff */ }


var Princess = [{
    mom: "Shanterria", dad: "Rodney I", brother: "Rodney II", brother: "Rodney III", brother: "Rodney IV", brother: "Rodney V", sister: "Sofia"
}]

var Trini = [{ mom: "Marilyn", dad: "Howard",
brother: "Disraeli",
    sister: "Maria",
    brother: "Talleyrand"
}]


function forEach(list, callback) {

    for (var i = 0; i < list.length; i++) {

        callback(list[i]);
    }


 };

forEach(Princess, function(title) {

    console.log('My mom\'s name is ' + title.mom);

});

forEach(Trini, function(title) {

    console.log('My dad\'s name is ' + title.dad);

});


Princess.forEach(function (title) {
console.log(Princess.mom);
});


Trini.forEach(function (title) {
console.log(Trini.dad);
});




// 2. Write your own map, reduce, and filter functions that use your custom forEach to do their work.


//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Person [B] Drives, Person [A] Assists
//////////////////////////////////////////////////
//////////////////////////////////////////////////



// 3. Write a function called pluck that extracts a list of property names:

function pluck(list, propertyName) { /* Do stuff*/ }

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
pluck(stooges, 'name');
// => ["moe", "larry", "curly"]


// var who = stooges.map(function(stooge) {
//     return stooge.name
// });



// 4. Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

function find(list, predicate) { /* Do stuff */ }

var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> 2
