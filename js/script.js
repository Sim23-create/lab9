// Get the elements from the HTML
const addForm = document.getElementById("addForm");
const itemInput = document.getElementById("item");
const itemsList = document.getElementById("items");
const emptyMessage = document.querySelector("span");

// Listen for form submission
addForm.addEventListener("submit", function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get the task text and remove extra spaces
    const taskText = itemInput.value.trim();

    // Don't add an empty task
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Create the task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.style.display = "inline";

    // Create the Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger btn-sm";

    // Remove the task when Delete is clicked
    deleteButton.addEventListener("click", function() {
        li.remove();
        updateEmptyMessage();
    });

    // Add the text and button to the list item
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    // Add the new task to the list
    itemsList.appendChild(li);

    // Clear the input field
    itemInput.value = "";

    // Update the empty-list message
    updateEmptyMessage();
});

// Show or hide the empty-list message
function updateEmptyMessage() {
    if (itemsList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

// Set the correct message when the page loads
updateEmptyMessage();