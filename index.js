const express = require('express');
const app = express();
app.listen(3000, ()=>console.log("listening at 3000"));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));
app.post('/api', (req,res)=>{
    console.log('i got a request');
    console.log(req.body);
    res.json({
        status: 'success',
        latitude: req.body.lat,
        longitude: req.body.long
    });
});