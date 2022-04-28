const LIST_KEY = 'task.list';
const todoList = JSON.parse(localStorage.getItem(LIST_KEY)) || [];

const save = () => {
  localStorage.setItem(LIST_KEY, JSON.stringify(todoList));
};

const status = (checkbox, task) => {
  if (checkbox.checked) {
    task.completed = true;
  } else {
    task.completed = false;
  }
};

const removeLocal = (todo) => {
  const todoIndex = todo.children[0].children[1].value;
  todoList.splice(todoList.indexOf(todoIndex), 1);
  save();
  window.location.reload();
};

export {
  status, todoList, LIST_KEY, removeLocal, save,
};