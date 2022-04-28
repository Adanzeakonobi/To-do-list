// eslint-disable-next-line no-unused-vars
import _ from "lodash";
import "./style.css";

const container = document.querySelector(".list-container");

const todoList = [
  {
    index: 1,
    description: "Wash the Dishes",
    completed: true,
  },
  {
    index: 2,
    description: "clean the house",
    completed: true,
  },
  {
    index: 3,
    description: "store up for the fridge",
    completed: true,
  },
];

function clear(element) {
  while (element.firstChild) element.removeChild(element.firstChild);
}

function render() {
  clear(container);
  todoList.forEach((todo) => {
    const div = document.createElement("div");
    const listElement = document.createElement("li");
    const input = document.createElement("input");
    const span = document.createElement("span");

    input.type = "checkbox";
    input.name = "name";
    input.value = "value";
    input.id = "id";
    input.classList.add("cursor");
    listElement.dataset.listId = todo.index;
    div.classList.add("listcont-prop");
    listElement.classList.add("list-prop");
    span.classList.add("grow");
    span.innerHTML = `${todo.description}`;
    const icon = document.createElement("i");
    icon.classList.add("fas");
    icon.classList.add("fa-ellipsis-v");
    listElement.appendChild(input);
    listElement.appendChild(span);
    listElement.appendChild(icon);
    div.appendChild(listElement);
    container.appendChild(div);
  });
}

render();
