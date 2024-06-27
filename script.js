let list = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    let new_item = input.value;
    input.value = '';
})

let list_item = document.createElement("li");
let span = document.createElement("span");
let btn2 = document.createElement("button");

list_item.appendChild(span);
list_item.appendChild(btn2);

span.textContent = new_item;
btn2.textContent = "Delete";