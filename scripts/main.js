// var Princess = [{
//     mom: "Shanterria", dad: "Rodney I", brother: "Rodney II", brother: "Rodney III", brother: "Rodney IV", brother: "Rodney V", sister: "Sofia"
// }]

// var Trini = [{ mom: "Marilyn", dad: "Howard",
// brother: "Disraeli",
//     sister: "Maria",
//     brother: "Talleyrand"
// }]

var PrincessFamily = [
    "Shanterria", "Rodney I", "Rodney II", "Rodney III", "Rodney IV", "Rodney V", "Sofia"
];

function forEach(list, callback) {

    for (var i = 0; i < list.length; i++) {

        callback(list[i]);
    }

 };

// forEach(Princess, function(title) {

//     console.log('My mom\'s name is ' + title.mom);

// });

// forEach(Trini, function(title) {

//     console.log('My dad\'s name is ' + title.dad);

// });


// Princess.forEach(function (title) {
// console.log(Princess.mom);
// });


// Trini.forEach(function (title) {
// console.log(Trini.dad);
// });

forEach(Princess, function(title) {

    ('My mom\'s name is ' + title.mom);

});

function forEach(list, callback) {

    for (var i = 0; i < list.length; i++) {

        callback(list[i]);
    }


 };

 var PrincessFamily = [
    "Shanterria", "Rodney I", "Rodney II", "Rodney III", "Rodney IV", "Rodney V", "Sofia"
];

PrincessFamily.forEach(function(name) { console.log(name.length);
});

PrincessFamily.filter(function(names) {
return names;
});


//  3.
// var who = stooges.map(function(stooge) {
//     return stooge.name
// });

