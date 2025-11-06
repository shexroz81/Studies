// Dars-6
// Eventloop




// function salom() {
//     console.log("Salom");
// }

// function boshla() {
//     salom();
// }

// boshla();


// function greet() {
//     return "Hello";
// }
// function respond() {
//     return setTimeout(() => {
//         return "Hey!";
//     }, 1000);
// };
// greet();
// respond();




const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 1000);
const baz = () => console.log("Third");
bar();
foo();
baz();