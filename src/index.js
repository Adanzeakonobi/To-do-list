// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import { status, todoList, save } from './check.js';
import { createList, deleteList, deleteAllDone } from './addrem.js';

const container = document.querySelector('.list-container');
const newList = document.querySelector('.form');
const newBar = document.querySelector('.add-bar');
const refresh = document.querySelector('.fa-sync-alt');
const clearCompleted = document.querySelector('.clear');

const clear = (element) => {
  while (element.firstChild) element.removeChild(element.firstChild);
};

const render = () => {
  clear(container);
  todoList.forEach((todo) => {
    const div = document.createElement('div');
    const listElement = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const icon = document.createElement('i');
    const dlt = document.createElement('i');
    const edit = document.createElement('input');

    input.type = 'checkbox';
    input.name = 'name';
    input.value = 'value';
    input.id = 'id';
    input.classList.add('cursor');
    input.classList.add('check');

    edit.type = 'text';
    edit.value = `${todo.description}`;
    edit.id = `${todo.index}`;
    edit.classList.add('grow');

    input.checked = todo.completed;
    input.addEventListener('change', () => {
      status(input, todo);
      save(todoList);
    });

    // listElement.dataset.listId = todo.index;
    div.classList.add('listcont-prop');
    listElement.classList.add('list-prop');
    span.classList.add('grow');
    span.innerHTML = `${todo.description}`;

    icon.classList.add('fas');
    icon.classList.add('fa-ellipsis-v');
    icon.classList.add('show-more');
    dlt.classList.add('fas');
    dlt.classList.add('fa-trash-alt');

    listElement.appendChild(input);
    listElement.appendChild(span);
    listElement.appendChild(icon);
    div.appendChild(listElement);
    container.appendChild(div);

    icon.addEventListener('click', () => {
      icon.replaceWith(dlt);
      span.replaceWith(edit);
    });
  });
};

refresh.addEventListener('click', () => {
  window.location.reload();
});

render();

const saveAndRender = () => {
  save();
  render();
};

newList.addEventListener('submit', (e) => {
  e.preventDefault();
  const listName = newBar.value;
  if (listName == null || listName === '') return;
  const list = createList(listName);
  newBar.value = null;
  todoList.push(list);
  saveAndRender();
});

container.addEventListener('click', deleteList);
clearCompleted.addEventListener('click', deleteAllDone);
