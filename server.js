const express = require('express');
const api = require('./routes/index.js');

const app = express();
const PORT = 3001;
const path = require('path');

app.use(express.static('public'));

app.post('/api/notes', (req, res) => {
  res.status(200);
  console.log('this route')
  console.log(req.body)
  const { title, text } = req.body
  console.log(title, text);
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(req.body);
        writeToFile('./db/db.json', parsedData);
      }

    });
  res.json(req.body);
})

app.use('/api', api);
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));
app.get('/notes',(req, res) => res.sendFile(path.join(__dirname, '/notes.html')));





app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);
