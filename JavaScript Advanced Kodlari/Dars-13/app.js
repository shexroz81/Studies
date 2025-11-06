// Dars-13
// Event Propagation


const parent = document.querySelector("#parent");
const btn = document.querySelector("#btn");

// parent.addEventListener("click", () => {
//     alert("Parent Bosildi");
// })

// btn.addEventListener("click", () => {
//     alert("Child Bosildi");
// })

parent.addEventListener("click", () => {
    alert("Parent Bosildi");
}, true);

btn.addEventListener("click", () => {
    alert("Child Bosildi");
})
