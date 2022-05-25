var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);
var btnClick = function (){
    var taskList = document.querySelector(".task-list");
    var newItem = document.createElement("li");
    newItem.textContent = "New task";
    newItem.className = "task-item";
    taskList.appendChild(newItem);
};
buttonEl.addEventListener("click", btnClick);