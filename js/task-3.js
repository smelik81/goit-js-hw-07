const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
const mainTitle = document.querySelector("h1");

inputEl.addEventListener("input", handleInput); // якщо замінити подію на blur значення textContent буде змінюватись при втраті фокусу

function handleInput(event) {
  const name = event.target.value.trim();
  if (name === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = name;
  }
}

const divInputTask = document.createElement("div");
divInputTask.classList.add("div__task-3");

document.body.insertAdjacentElement("afterend", divInputTask);
divInputTask.append(inputEl, mainTitle);

