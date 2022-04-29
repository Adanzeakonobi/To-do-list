import { todoList, removeLocal, save } from './check.js';

export const createList = (task) => (
  {
    index: todoList.length,
    description: task,
    completed: false,
  });

export const deleteList = (e) => {
  const deleteButton = e.target;
  if (deleteButton.classList[1] === 'fa-trash-alt') {
    const itemToDelete = deleteButton.parentElement.parentElement;
    removeLocal(itemToDelete);
    itemToDelete.remove();
    save();
  }
};

export const deleteAllDone = () => {
  const completed = document.querySelectorAll('.check');
  completed.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.parentElement.parentElement.remove();
    }
  });
  for (let i = 0; i < todoList.length; i += 1) {
    // eslint-disable-next-line array-callback-return
    todoList.filter((task) => {
      if (task.completed) {
        const index = todoList.indexOf(task);
        todoList.splice(index, 1);
        let i = 0;
        while (i < todoList.length) {
          if (todoList[i].id > task.id) {
            todoList[i].id -= 1;
          }
          i += 1;
        }
        save();
      }
    });
  }
};