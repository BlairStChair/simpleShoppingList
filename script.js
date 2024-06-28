let list = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener('click', () => {
    let new_item = input.value;
    input.value = '';

let list_item = document.createElement("li");
let span = document.createElement("span");
let btn2 = document.createElement("button");
let checkbox= document.createElement("input")
checkbox.setAttribute("type","checkbox");
checkbox.setAttribute("id", "check");

list_item.appendChild(checkbox);

list_item.appendChild(span);
span.textContent = new_item;

list_item.appendChild(btn2);
btn2.textContent = "Delete";


list.appendChild(list_item);

btn2.addEventListener('click', () => {
      list.removeChild(list_item);
});

input.focus();

});

