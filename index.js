const express =require ('express');
const app =express();
var cors = require('cors')
const port = process.env.PORT || 5000;
const chefs = require('./data/chefs.json');

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Chef is Coming')

});
app.get('/chefs', (req, res) =>{
    console.log(chefs);
    res.send(chefs);
})
app.listen(port,()=>{
    console.log(`chef api is runing on port : ${port}`)
})