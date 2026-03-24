const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    li.addEventListener("click", function() {
      li.style.textDecoration = "line-through";
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";

    removeBtn.addEventListener("click", function() {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

button.addEventListener("click", function() {
  if (input.value === "") return;

  tasks.push(input.value);
  saveTasks();
  renderTasks();

  input.value = "";
});

renderTasks();