var Princess = [{
    mom: "Shanterria", dad: "Rodney I", brother: "Rodney II", brother: "Rodney III", brother: "Rodney IV", brother: "Rodney V", sister: "Sofia"
}]

var Trini = [{ mom: "Marilyn", dad: "Howard",
brother: "Disraeli",
    sister: "Maria",
    brother: "Talleyrand"
}]


// var Trini = [dad: 'Howard', mom: 'Marilyn', brother: 'Disraeli', sister: 'Maria', brother: 'Talleyrand'];

function forEach(list, callback) {

    for (var i = 0; i < list.length; i++) {

        callback(list[i]);
    }


 };

forEach(Princess, function(title) {

console.log('My mom\'s name is ' + title.mom);

});












