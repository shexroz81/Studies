// Dars-9

// This kalit so`zi

// function test() {
//     console.log(this);
// }

// this();

const user = {
    ism: "shexroz",
    ismi() {
        console.log(this.ism);
    }
};

user.ismi();