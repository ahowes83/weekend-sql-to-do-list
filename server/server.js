const express = require('express');
const app = express()
const bodyParser = require( 'body-parser');
const toDoList = require('./modules/toDoList');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/toDoList', toDoList);

const port = process.env.PORT || 5001;

app.listen(port, ()=>{
  console.log("Surf's up", port);
});