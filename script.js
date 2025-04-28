// Dark Mode Toggle
document.getElementById('toggleTheme').addEventListener('click', function() {
  document.body.classList.toggle('dark');
});

// Feedback Form Submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if(name && email && message) {
    document.getElementById('feedbackResponse').innerText = `Thank you, ${name}!`;
    this.reset();
  } else {
    document.getElementById('feedbackResponse').innerText = "Please complete all fields.";
  }
});

// Add Project Tracker
function addProject() {
  const projectInput = document.getElementById('newProject');
  const projectName = projectInput.value.trim();
  
  if(projectName) {
    const list = document.getElementById('trackerList');
    const listItem = document.createElement('li');
    listItem.innerText = projectName;
    list.appendChild(listItem);
    projectInput.value = "";
  }
}
