
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const {getGears, createGear} = require('./controller')

// Endpoints
app.get('/api/gears' ,getGears)

app.post('/api/gears' ,createGear)

app.listen(4001, console.log('listening on port 4001'))


// app.get('/api/gears/:id', getGear)

// app.post('/api/gears' ,createGear)


// app.listen(4001, console.log('listening on port 4001'))