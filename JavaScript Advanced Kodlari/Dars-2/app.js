// Kirish-1


// Dars-2 Destructuring, spread va rest operatorlar;

// Array bilan

const raqamlar = [10, 23, 25, 30];

const [, , , next] = raqamlar;
console.log( next);




// const [firstOne, ...otherValues] = raqamlar;
// console.log(firstOne);
// console.log(otherValues);

// Object Bilan

// const person = {
//     ism: "shexroz",
//     yosh: 17,
//     qiziqish: "sport"
// };

// const { ism, yosh } = person;
// console.log(ism, yosh);

// const { ism, ...others } = person;
// console.log(ism);
// console.log(others);



// Rest Operator

// const umumiy = (...numbers) => {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(umumiy(20, 10, 20));




