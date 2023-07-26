const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});


const dataDir = path.join(__dirname, 'data');
const dataFilePath = path.join(dataDir, 'timer_data.json');

let timerData = { seconds: 0 };
if (fs.existsSync(dataFilePath)) {
  const jsonData = fs.readFileSync(dataFilePath, 'utf8');
  timerData = JSON.parse(jsonData);
}

// Create the 'data' folder if it doesn't exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Save initial timer data to the JSON file if it doesn't exist
if (!fs.existsSync(dataFilePath)) {
  fs.writeFileSync(dataFilePath, JSON.stringify(timerData));
}

let timerInterval; // Variable to keep track of the interval

function updateTimerData() {
  timerData.seconds++;
  fs.writeFile(dataFilePath, JSON.stringify(timerData), (err) => {
    if (err) {
      console.error('Error writing to JSON file:', err);
    } else {
      console.log('Timer data saved successfully:', timerData);
    }
  });
}

app.get('/timer-data', (req, res) => {
  res.json(timerData);
});

app.put('/timer-data', express.json(), (req, res) => {
  const { seconds } = req.body;
  timerData.seconds = seconds;

  updateTimerData();

  res.send('Timer data saved successfully.');
});

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);

  // Clear the interval if the server restarts
  clearInterval(timerInterval);

  // Start the timer interval
  timerInterval = setInterval(updateTimerData, 1000);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${port} is already in use. Trying another port...`);
    setTimeout(() => {
      server.close();
      server.listen(0);
    }, 1000);
  } else {
    console.error('Server error:', err);
  }
});
