// Dars-11

// Call, Apply va Bind funksiyalari 


// Call

function salom(ism) {
    console.log("salom ismim " + ism + " va men " + this.kasb + "man");
}

const bola = {
    kasb: "Student"
};

salom.call(bola, ["shexroz"]);

// Apply

function salom(ism) {
    console.log("salom ismim " + ism + " va men " + this.kasb + "man");
}

const bola1 = {
    kasb: "Student"
};

salom.call(bola1, ["Shexroz"]);

// Bind

function salom(ism) {
    console.log("salom ismim " + ism + " va men " + this.kasb + "man");
}

const bola2 = {
    kasb: "Student"
};

const yangi = salom.bind(bola2, ["sheXroz"]);
yangi();