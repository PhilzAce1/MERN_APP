require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items')

const app = express();

const {DB} = process.env

app.use(bodyParser.json());

mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology: true,})
.then(() => {console.log('Connected to DB')})
.catch(err => console.log(err))

const port = process.env.PORT || 5000;
app.use('/api/items', items)

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));