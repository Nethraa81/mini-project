const form = document.getElementById('logForm');
const logList = document.getElementById('logList');
const logs = JSON.parse(localStorage.getItem('logs')) || [];

// Display existing logs
function displayLogs() {
  logList.innerHTML = '';
  logs.forEach((log) => {
    const li = document.createElement('li');
    li.textContent = `${log.date} - ${log.exercise} | ${log.meal}`;
    logList.appendChild(li);
  });
}

// Add new log
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const exercise = document.getElementById('exercise').value;
  const meal = document.getElementById('meal').value;
  const date = new Date().toLocaleDateString();

  logs.push({ exercise, meal, date });
  localStorage.setItem('logs', JSON.stringify(logs));
  displayLogs();
  form.reset();
});

// Clear all logs
document.getElementById('clearLogs').addEventListener('click', () => {
  localStorage.removeItem('logs');
  logs.length = 0;
  displayLogs();
});

// Dark Mode toggle
document.getElementById('toggleDark').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

displayLogs();
