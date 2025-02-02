function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `${taskText} 
        <div>
            <button class='btn btn-success btn-sm me-2' onclick='completeTask(this)'><i class='fa-solid fa-check'></i></button>
            <button class='btn btn-danger btn-sm' onclick='removeTask(this)'><i class='fa-solid fa-trash'></i></button>
        </div>`;
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.parentElement.remove();
}

function completeTask(button) {
    let taskItem = button.parentElement.parentElement;
    document.getElementById("completedTasks").appendChild(taskItem);
    button.remove();
    
    let completedTitle = document.getElementById("completedTitle");
    completedTitle.style.display = "block";
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});