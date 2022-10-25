const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const cources = require('./data.json')

app.get('/', (req, res)=>{
    res.send('Cource API working GREAT!!')
});

app.get('/cources', (req, res)=>{
    res.send(cources)
})

app.listen(port, ()=>{
    console.log('working port', port);
})

module.exports = app;