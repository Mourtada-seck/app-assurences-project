// Graphe de la production
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai'],
    datasets: [{
      label: 'Production',
      data: [10000, 20000, 15000, 30000, 18000],
      backgroundColor: 'rgba(13, 110, 253, 0.7)',
      borderRadius: 10,
      borderSkipped: false
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#1f1f1f',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ddd'
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#333',
          font: {
            weight: 'bold'
          }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#eee'
        },
        ticks: {
          color: '#333',
          callback: value => value.toLocaleString('fr-FR') + ' F'
        }
      }
    }
  }
});


// Évolution mensuelle
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai'],
    datasets: [{
      label: 'Évolution',
      data: [5, 10, 7, 12, 9],
      fill: true,
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      pointBackgroundColor: '#fff',
      pointBorderColor: 'rgba(255, 159, 64, 1)',
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#343a40',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#333',
          font: {
            weight: 'bold'
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333',
          callback: value => value + ' unités'
        },
        grid: {
          color: '#eee'
        }
      }
    }
  }
});
