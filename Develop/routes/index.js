const app = require('express').Router();
const fs = require('fs');
const util = require('util');



const readFromFile = util.promisify(fs.readFile);







app.get('/notes',(req, res ) =>{
 readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    









})

app.post('/notes',(req, res )=>{

    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          const parsedData = JSON.parse(data);
          parsedData.push(content);
          writeToFile(file, parsedData);
        }
      });





})


module.exports = app;



