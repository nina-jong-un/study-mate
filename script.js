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
let intervalId;
let elapsedTime = 0;

function startTimer() {
  if (!intervalId) {
      intervalId = setInterval(() => {
          elapsedTime++;
          document.getElementById('timer-display').textContent = formatTime(elapsedTime);
      }, 1000); // Update every second

      document.getElementById('study-image').style.display = 'block'; // Show cat GIF
  }
}

function stopTimer() {
  if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;

      // Store elapsed time in local storage
      storeStudyData(elapsedTime);
      updateStudyChart();
  }
}

function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  document.getElementById('timer-display').textContent = formatTime(elapsedTime);
  document.getElementById('study-image').style.display = 'none'; // Hide cat GIF
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Store study data in local storage
function storeStudyData(seconds) {
  const today = new Date().toLocaleDateString();
  let studyData = JSON.parse(localStorage.getItem('studyData')) || {};

  if (studyData[today]) {
      studyData[today] += seconds;
  } else {
      studyData[today] = seconds;
  }

  localStorage.setItem('studyData', JSON.stringify(studyData));
}

// Retrieve study data from local storage
function getStudyData() {
  return JSON.parse(localStorage.getItem('studyData')) || {};
}

// Chart.js functionality to create and update the graph
const ctx = document.getElementById('studyChart').getContext('2d');
let studyChart;

function updateStudyChart() {
    const studyData = getStudyData();
    const labels = Object.keys(studyData);
    const data = Object.values(studyData).map(seconds => (seconds / 3600).toFixed(2)); // Convert seconds to hours

    if (studyChart) {
        studyChart.destroy();
    }

    studyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Study Hours',
                data: data,
                backgroundColor: [
                    '#F6E7D8', 
                    '#F68989', 
                    '#C65D7B', 
                    '#874356',
                    '#F6E7D8', 
                    '#F68989', 
                    '#C65D7B', 
                    '#874356'
                ], // Add more colors as needed
                borderColor: [
                    '#F6E7D8', 
                    '#F68989', 
                    '#C65D7B', 
                    '#874356',
                    '#F6E7D8', 
                    '#F68989', 
                    '#C65D7B', 
                    '#874356'
                ], // Match border colors to background colors
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#1C0A00', // Vibrant color for the axis labels
                        callback: function(value) {
                            return value + " hrs";
                        }
                    },
                    grid: {
                        color: '#1C0A00' // Vibrant color for the grid lines
                    }
                },
                x: {
                    ticks: {
                        color: '#1C0A00' // Vibrant color for the axis labels
                    },
                    grid: {
                        color: '#1C0A00' // Vibrant color for the grid lines
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + ' hrs';
                        }
                    }
                }
            }
        }
    });
}

// Initialize the chart when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateStudyChart();
});


// To-Do List Functionality
function addTodo() {
  const task = document.getElementById('todo-input').value;

  if (task) {
      const listItem = document.createElement('li');
      listItem.textContent = task;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => listItem.remove();

      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.onclick = () => {
          listItem.classList.toggle('completed');
      };

      listItem.appendChild(deleteButton);
      listItem.appendChild(completeButton);
      document.getElementById('todo-list').appendChild(listItem);

      document.getElementById('todo-input').value = '';
  } else {
      alert('Please enter a task');
  }
}

// Music Player Functionality
function playMusic() {
  const audioPlayer = document.getElementById('audio-player');
  audioPlayer.play();
}

function pauseMusic() {
  const audioPlayer = document.getElementById('audio-player');
  audioPlayer.pause();
}
const backgroundImages = ['./bg1.jpg', './bg2.gif', './bg3.jpg','./bg4.jpg','./bg5.jpg','./bg6.jpg']; // Add more images as needed
let currentIndex = 0;

// Function to change background image
function changeBackgroundImage() {
    document.body.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
    currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Call the function initially
changeBackgroundImage();

// Set interval to change background image every 15 seconds
setInterval(changeBackgroundImage, 15000);




