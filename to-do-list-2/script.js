window.addEventListener('load', () => {
  // A global variable that gets todos if there are any saved in local stoarge
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  const nameInput = document.querySelector('#name');
  const newTodoForm = document.querySelector('#new-todo-form');

  // Listens for the change in value of name input field
  nameInput.addEventListener('change', event => {
    // Set the value of username (name of the key you want to create/update) in local storage to the value of nameInput
    localStorage.setItem('username', event.target.value);
  });
  // Get the value of username from the local storage
  const username = localStorage.getItem('username') || '';
  // Assign the value of nameInput to username
  nameInput.value = username;

  // Listens for the submit of a new todo form
  newTodoForm.addEventListener('submit', event => {
    // Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
    event.preventDefault;

    const todo = {
      // Value of element's name=content
      content: event.target.elements.content.value,
      // Value of element's name=category
      category: event.target.elements.category.value,
      done: false,
      createdAt: new Date().getTime()
    }

    todos.push(todo);

    // Set the value of todos (name of the key you want to create/update) in local storage to a stringified version of todos
    localStorage.setItem('todos', JSON.stringify(todos));

    // Resets form: empties input field and unclicks radio button
    event.target.reset();
  })
})