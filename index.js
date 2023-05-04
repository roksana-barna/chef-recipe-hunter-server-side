const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

const chefDetails = require('./data/details.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Chef is Coming')

});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})
app.get('/chefdetails', (req, res) => {
    res.send(chefDetails);
})

app.get('/chefdetails/:id', (req, res) => {
    const id = req.params.id;
    const selectchef = chefDetails.find(n => n.id === id);
    res.send(selectchef)
})


app.listen(port, () => {
    console.log(`chef api is runing on port : ${port}`)
})