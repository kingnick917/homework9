const express = require('express');
const api = require('./routes/index.js');

const app = express();
const PORT = 3001;
const path = require('path');

app.use(express.static('public'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/notes',(req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));
app.use('/api', api);




app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);
