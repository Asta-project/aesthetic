const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// 🏹 Load all race files
const races = [];
const racesPath = path.join(__dirname, 'races');
const raceFiles = fs.readdirSync(racesPath);

raceFiles.forEach(file => {
  if (file.endsWith('.js')) {
    const race = require(`./races/${file}`);
    races.push(race);
  }
});

// 🛤 Send to frontend
app.get('/', (req, res) => {
  res.render('index', { races });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
