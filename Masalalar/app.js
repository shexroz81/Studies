const users = [
    { id: 1, name: "Ali", age: 25, address: { city: "Tashkent", street: "Amir Temur" } },
    { id: 2, name: "Bobur", age: null, address: { city: "Samarkand" } },
    { id: 3, name: "Laylo", age: 19, address: null },
];



users.forEach(({ name, age }) => {
    console.log(name, age);
});









