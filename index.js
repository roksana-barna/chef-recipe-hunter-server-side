const express =require ('express');
const app =express();
var cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

const chefDetails = require('./data/details.json');
const recipes =require('./data/recipes.json')

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Chef is Coming')

});

app.get('/recipes', (req, res) =>{
    res.send(recipes);
})

app.get('/chefs', (req, res) =>{
    res.send(chefs);
})
app.get('/chefdetails', (req, res) => {
    res.send(chefDetails);
})

app.get('/chefdetails/:id', (req, res) => {
    const id = req.params.id;
    const selectchef = chefDetails.find(n=>n.id === id);
    res.send(selectchef)
})


// app.get('/chefdetails/:id/recepies/:id', (req, res) => {
//     const id = req.params.id;
//     const selectchef = chefDetails.find(n=>n.id === id);
//     res.send(selectchef)
// })
// app.get('/chefs/:id', (req, res) => {
//     const id = (req.params.id);
//     const chefsinfo =chefDetails.filter(n=>n.id===id)
//       console.log(chefsinfo)  
    
//     else {
//         const chefsinfo = chefDetails?.filter(n => parseInt(n.id) === id);
//         res.send(chefsinfo)
//     }
    // })
app.listen(port,()=>{
    console.log(`chef api is runing on port : ${port}`)
})