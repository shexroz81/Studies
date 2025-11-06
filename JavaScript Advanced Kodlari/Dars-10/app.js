// Dars-10

// Higher Order Functions

function bajar(greet) {
    greet();
}

function salom() {
    console.log("salom berildi");
}

bajar(salom);


function ikkiMarta(other) {
    other();
    other();
    other();
}

function salomIkki() {
    console.log("salom 2 marta");
}

ikkiMarta(salomIkki);


function sayHello() {
    console.log("salom yana");
}

function yanaSalom(greeting) {
    greeting();
}

yanaSalom(sayHello);