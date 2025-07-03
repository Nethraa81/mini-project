const lineCtx = document.getElementById('lineChart');
if (lineCtx) {
  new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        label: 'Steps Walked',
        data: [5000, 6000, 7000, 8000, 9000],
        borderColor: 'blue',
        fill: false
      }]
    }
  });
}

// Pie Chart
const pieCtx = document.getElementById('pieChart');
if (pieCtx) {
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: ['Carbs', 'Protein', 'Fat'],
      datasets: [{
        data: [50, 30, 20],
        backgroundColor: ['#f39c12', '#2ecc71', '#e74c3c']
      }]
    }
  });
}

// Bar Chart (Progress)
const progressCtx = document.getElementById('progressChart');
if (progressCtx) {
  new Chart(progressCtx, {
    type: 'bar',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3'],
      datasets: [{
        label: 'Calories Burned',
        data: [1000, 1400, 1800],
        backgroundColor: 'purple'
      }]
    }
  });
}
