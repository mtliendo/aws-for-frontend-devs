const todoForm = document.querySelector("#todo-form");
const todosList = document.querySelector("#todos-list");

// todo: scan for any items in the database, if present, remove the '#no-todos-message' and add them to the todosList

// todo: if(!areTodosInDB) {
//   add display:none to no-todos-message
// } else {
//   add display block
// }

// When the form is submitted
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoTitle = document.querySelector("#todo");

  // Post to database
  /*
  {
    title: todoTitle.value
  }
  */

  // Add todos to the todos-list
  const li = document.createElement("li");
  li.innerText = todoTitle.value;

  todosList.appendChild(li);

  //reset the values and add focus to the todoTitle
  todoTitle.value = "";
  todoTitle.focus();
});
