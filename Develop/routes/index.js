const router = require('express').Router();
const fs = require('fs');
const util = require('util');



const readFromFile = util.promisify(fs.readFile);







router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

});


router.post('/notes', (req, res) => {
    console.log('this route')
    console.log(req)
    // fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //     if (err) {
    //       console.error(err);
    //     } else {
    //       const parsedData = JSON.parse(data);
    //       parsedData.push(req.body);
    //       writeToFile('./db/db.json', parsedData);
    //     }

    //   });
    res.json(req.body);




})

const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );





module.exports = router;



