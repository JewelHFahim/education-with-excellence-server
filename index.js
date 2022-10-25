const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const cources = require('./data.json');
const categories = require('./categories.json');

app.get('/', (req, res)=>{
    res.send('Cource API working GREAT!!')
});

app.get('/cources', (req, res)=>{
    res.send(cources)
})

app.get('/cource/:id', (req, res)=>{
    const id = req.params.id;
    const singleCource = cources.find(c => c.id == id );
    res.send(singleCource);
})

app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    const getCategory = categories.filter(d => d.id == id );
    res.send(getCategory);
})

app.listen(port, ()=>{
    console.log('working port', port);
})

module.exports = app;