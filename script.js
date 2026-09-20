function addTask() {
    let task = document.getElementById("taskInput").value;
    let subject = document.getElementById("subjectInput").value;
    let priority = document.getElementById("priorityInput").value;

    if (task === "" || subject === "") {
        alert("Please enter task and subject");
        return;
    }

    let taskList = document.getElementById("taskList");

    let div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
        <div>
            <b>${task}</b><br>
            Subject: ${subject}<br>
            Priority: ${priority}
        </div>

        <div>
            <button onclick="completeTask(this)">Done</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(div);

    document.getElementById("taskInput").value = "";
    document.getElementById("subjectInput").value = "";
}

function completeTask(button) {
    button.parentElement.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}