let list = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    let new_item = input.value;
    input.value = '';
})