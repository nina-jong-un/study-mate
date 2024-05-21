// Timetable Functionality
function addTimetableEntry() {
    const subject = document.getElementById('subject').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
  
    if (subject && startTime && endTime) {
      const listItem = document.createElement('li');
      listItem.textContent = `${subject}: ${startTime} - ${endTime}`;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => listItem.remove();
  
      listItem.appendChild(deleteButton);
      document.getElementById('timetable-list').appendChild(listItem);
  
      document.getElementById('subject').value = '';
      document.getElementById('start-time').value = '';
      document.getElementById('end-time').value = '';
    } else {
      alert('Please fill in all fields');
    }
  }
  
  // Timer Functionality
  let timer;
  let seconds = 0;
  
  function startTimer() {
    if (!timer) {
      timer = setInterval(() => {
        seconds++;
        document.getElementById('timer-display').textContent = formatTime(seconds);
      }, 1000);
    }
  }
  
  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }
  
  function resetTimer() {
    stopTimer();
    seconds = 0;
    document.getElementById('timer-display').textContent = formatTime(seconds);
  }
  
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  // To-Do List Functionality
  function addTodo() {
    const task = document.getElementById('todo-input').value;
  
    if (task) {
      const listItem = document.createElement('li');
      listItem.textContent = task;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => listItem.remove();
  
      listItem.appendChild(deleteButton);
      document.getElementById('todo-list').appendChild(listItem);
  
      document.getElementById('todo-input').value = '';
    } else {
      alert('Please enter a task');
    }
  }
  