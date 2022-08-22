const addButton = document.getElementById("add");
const todoContainer = document.getElementById("todo-container");
const inputField = document.getElementById("input-field");

addButton.addEventListener('click', () => {
  var paragraph = document.createElement('p');
  paragraph.innerText = inputField.value;
  todoContainer.appendChild(paragraph);
  inputField.value = '';
  paragraph.addEventListener('click', () => {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener('dblclick', () => {
    todoContainer.removeChild(paragraph);
  });
});