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

    DisplayTodos();
  })

  // Call to display todos when the page is loaded
  DisplayTodos();
})

function DisplayTodos() {
  const todoList = document.querySelector('#todo-list');
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const todoItem = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span  = document.createElement('span');
    const content = document.createElement('div');
    const actions = document.createElement('div');
    const edit = document.createElement('button');
    const deleteBtn = document.createElement('button');

    // Add classes to todoItem div content div, actions div, edit button and deleteBtn button
    todoItem.classList.add('todo-item');
    content.classList.add('todo-content');
    actions.classList.add('actions');
    edit.classList.add('edit');
    deleteBtn.classList.add('delete');

    // Makes type of input equal to checkbox
    input.type = 'checkbox';
    // Sets the checked input element to the value of todo.done which is false initially
    input.checked = todo.done;

    // Adds class to the span element
    span.classList.add('bubble');
    // Adds class to the span element based on the todo's category
    if(todo.category == 'personal') {
      span.classList.add('personal');
    } 
    else {
      span.classList.add('business');
    }

    // Adds todo's content as an input text element to content div
    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;

    // Adds innerHTML to the buttons
    edit.innerHTML = 'Edit';
    deleteBtn.innerHTML = 'Delete';

    // Appends input and span elements to label element
    label.appendChild(input);
    label.appendChild(span);

    //Appends the edit and deleteBtn buttons to the actions div
    actions.appendChild(edit);
    actions.appendChild(deleteBtn);

    // Append label, content div and actions div to todoItem div
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    // Append todoItem div to todoList section
    todoList.appendChild(todoItem);

    // If todo.done is true then add done as a class to todoItem div
    if(todo.done) {
      todoItem.classList.add('done');
    }
    
    // Listens for when the input checkbox is clicked
    input.addEventListener('click', event => {
      // Assigns the value of checked (true or false) to todo.done
      todo.done = event.target.checked;
      // After an update, set local storage
      localStorage.setItem('todos', JSON.stringify(todos));

      // Toggle the done class based on the value of todo.done
      if(todo.done) {
        todoItem.classList.add('done');
      } 
      else {
        todoItem.classList.remove('done');
      }

      DisplayTodos();
    })

    // Listens for when the edit button is clicked
    edit.addEventListener('click', event => {
      // Once clicked the readonly attribue is removed and the input element is focused
      const input = content.querySelector('input');
      input.removeAttribute('readonly');
      input.focus();
      // Listens for when focus is removed from the input element
      input.addEventListener('blur', event => {
        // Once focus has been removed attribute is set to readonly true and content of the todo is set to the value of the input element
        input.setAttribute('readonly', true);
        todo.content = event.target.value;
        // After an update, set local storage
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
      })
    })

    // Listens for when the delete button is clicked
    deleteBtn.addEventListener('click', event => {
      // Removes clicked todo
      todos = todos.filter(t => t != todo);
      // After an update, set local storage
      localStorage.setItem('todos', JSON.stringify(todos));
      DisplayTodos();
    })
  })
}