
document.addEventListener("DOMContentLoaded", function() {
            const taskInput = document.getElementById("taskInput");
            const addButton = document.getElementById("addButton");
            const taskList = document.getElementById("taskList");

            addButton.addEventListener("click", addTask);
            taskInput.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                    addTask();
                }
            });

            function addTask() {
                const taskText = taskInput.value.trim();

                if (taskText !== "") {
                    const li = document.createElement("li");
                    li.classList.add("taskItem");

                    const span = document.createElement("span");
                    span.textContent = taskText;

                    const deleteButton = document.createElement("button");
                    deleteButton.classList.add("deleteButton");
                    deleteButton.textContent = "Delete";
                    deleteButton.addEventListener("click", function() {
                        li.remove();
                    });

                    li.appendChild(span);
                    li.appendChild(deleteButton);
                    taskList.appendChild(li);

                    taskInput.value = "";
                }
            }
        });