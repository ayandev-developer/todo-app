const input = document.querySelector("#task");
const button = document.querySelector("button");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
    const task = input.value;
    if (task === "") {
        alert("please write the task")
        return;
    } else {
        alert("your task  added")
    }

    const list = document.createElement("li");
    list.textContent = task;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete"
    deleteButton.addEventListener("click", () => {
        list.remove();

    })
    const completeButton = document.createElement("button");
    completeButton.addEventListener("click", () => {
        list.classList.toggle("completed");
    })
    completeButton.innerText = "Complete"

    list.appendChild(completeButton);
    list.appendChild(deleteButton);
    container.appendChild(list);

    input.value = "";

});
