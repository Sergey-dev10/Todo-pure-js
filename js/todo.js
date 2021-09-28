function createTask(value) {
  let task = document.createElement("div");
  task.className = "task";

  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "status";

  task.innerHTML = `<p>${value}</p>`;
  task.insertAdjacentElement("beforeend", checkBox);

  checkBox.addEventListener("change", compliteTask);

  return task;
}

function addTask() {
  let field = document.querySelector(".field");
  let list = document.querySelector(".list");

  if (field.value.trim()) {
    let task = createTask(field.value);
    list.append(task);
    field.value = "";
  }
}

function compliteTask(event) {
  let { target } = event;
  if (target.checked) {
    target.previousElementSibling.classList.add("complited");
  } else {
    target.previousElementSibling.classList.remove("complited");
  }
}

let btn = document.querySelector(".add");
btn.addEventListener("click", addTask);


