require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const path = require('path');

const app = express();

const {DB} = process.env

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Philemon:philzpy162@mernshopping-tstp9.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true,})
.then(() => {console.log('Connected to DB')})
.catch(err => console.log(err))

app.use('/api/items', items)

// // Serve Static Assests ..if we are in Production
if(process.env.NODE_ENV === 'production'){
//   //set a static folder
  // app.use(express.static(path.join(__dirname, "client", "build")))
app.use(express.static('client/build'))
  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
}
const port = process.env.PORT || 4000


app.listen(port, () => console.log(`Server running on port ${port} 🔥`));