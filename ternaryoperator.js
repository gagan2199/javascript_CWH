
// let age;
let age = document.getElementById('age');

age.addEventListener('click', (element) => {
    age = prompt("write age here");

    console.log((age >= 18) ? "eligible" : "not eligible");
    console.warn((age >= 18) ? "eligible" : "not eligible");
})


