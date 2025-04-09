function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    // Create a new task item
    let li = document.createElement("li");
    li.textContent = taskText;

    // Add a delete button to the task
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    // Append the delete button to the task item
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}
