function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var checkboxContainer = document.createElement("span");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    li.appendChild(checkboxContainer);
    checkboxContainer.appendChild(checkbox);

    var textNode = document.createTextNode(taskInput.value);
    li.appendChild(textNode);
    taskList.appendChild(li);

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(deleteBtn);

    taskInput.value = "";
}
