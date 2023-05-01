const express =require ('express');
const app =express();
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Chef is Coming')

});
app.listen(port,()=>{
    console.log(`chef api is runing on port : ${port}`)
})