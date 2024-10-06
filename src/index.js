document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const tasksList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission

      const taskDescription = document.getElementById('new-task-description').value;
      const taskPriority = document.getElementById('task-priority').value;

      if (taskDescription) {
          addTask(taskDescription, taskPriority);
          form.reset(); // Clear the form fields
      }
  });

  function addTask(description, priority) {
      const li = document.createElement('li');
      li.textContent = description;
      li.className = priority; // Add priority class for styling

      // Append delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
          tasksList.removeChild(li);
      });
      li.appendChild(deleteButton);

      tasksList.appendChild(li);
  }
});
