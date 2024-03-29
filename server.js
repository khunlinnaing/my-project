const express = require('express');
const app = express();


app.get('/', (req, res) =>{
    res.json({
        status: 200,
        message: 'Hello world'
    })
});
app.listen(8000,() =>{
    console.log('server is running on port 8000');
})