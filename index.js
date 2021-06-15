// DOM ELEMENTS
const inputField = document.querySelector(".newtodo__input");
const newTodoContainer = document.querySelector(".newtodo");
const addTodoBtn = document.querySelector(".newtodo__btn");
const todosList = document.querySelector(".todos__list");
const footerBtn = document.querySelectorAll(".footer__arrow");

// FUNCTIONS

const getInputValue = () => {
  return inputField.value;
};

const addTodos = (todoText) => {
  // create to-do list item
  const newTodoElement = document.createElement("li");
  newTodoElement.classList.add("todos__item");

  // create todo text in new list item
  const newTodoText = document.createElement("p");
  newTodoText.textContent = todoText;

  // create wrapper for to-do check button
  const newTodoCheckWrapper = document.createElement("div");
  newTodoCheckWrapper.classList.add("todos__check__wrapper");

  // create to-do check button
  const newTodoCheck = document.createElement("div");
  newTodoCheck.classList.add("todos__check");
  newTodoCheck.innerHTML = "&#10003;";

  // add event listener for clicking the to-do check wrapper
  newTodoCheckWrapper.addEventListener("click", () => {
    newTodoElement.classList.toggle("todos__item--active");
    newTodoCheckWrapper.classList.toggle("todos__check__wrapper--active");
    newTodoCheck.classList.toggle("todos__check--active");
  });

  // append the item to the ul list
  newTodoCheckWrapper.appendChild(newTodoCheck);
  newTodoElement.append(newTodoText, newTodoCheckWrapper);

  todosList.appendChild(newTodoElement);

  // clear input field
  inputField.value = "";
};

//  ADD TO-DO EVENT LISTENER
addTodoBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const newTodoTextValue = getInputValue();
  if (newTodoTextValue === "") {
    const response = document.createElement("div");
    response.textContent = "Please fill in your new to-do";
    response.classList.add("newtodo__response");
    newTodoContainer.appendChild(response);
    setTimeout(() => {
      response.remove();
    }, 2000);
  } else {
    addTodos(newTodoTextValue);
  }
});

// FOOTER ARROW EVENT LISTENER

footerBtn.forEach((e) => {
  e.addEventListener("click", () => {
    const childElements = e.parentElement.parentElement.querySelectorAll(
      ".footer__second__item__item"
    );
    childElements.forEach((e) => {
      e.classList.toggle("footer__second__item__item--active");
    });
  });
});

// HARDCODED TO-DO'S

const todos = [
  "Reading about the Angi Studio",
  "Writing a recommendation letter",
  "Gathering a project or coding the challenge",
  "Applying for the job",
  "Reading about the Angi Studio",
  "Reading about the Angi Studio",
];

todos.forEach((todo) => {
  addTodos(todo);
});
