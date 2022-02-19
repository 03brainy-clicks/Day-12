// global
const task = document.getElementById("text");
const tasks = document.getElementById("tasks");
const todolist = [];
// global

// short logic
function add() {
  let li = document.createElement("li");
  li.innerText = task.value;
  li.addEventListener("click", () => {
    li.remove();
  });
  tasks.appendChild(li);
  task.value = "";
}
// short logic

// add
// function add() {
//   tasks.innerHTML = "";
//   todolist.push(task.value);
//   task.value = "";
//   listRender();
// }
// add

// delete todo
// function ondelete() {}
// delete todo

// function listRender() {
//   for (let i of todolist) {
//     let newItem = document.createElement("li");
//     newItem.innerText = i;
//     tasks.appendChild(newItem);
//   }
// }
