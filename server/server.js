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



// create front end allowing user to make task
// store task in database
// refresh when task created show all pending tasks
// user can complete or delete each task
// change appearance when task is complete check off complete option
// track completion status in database
// delete removes from front end and database

// style page using css

// create database in postico named 'weekend-to-do-app'

// make database.sql file in repo -- include all create table queries

// stretch:

// add bootstrap -- buttons / inputs / responsive -- see layout

// include confirmation prompt when user deletes task
// 	bootstrap modal or sweet alerts: use cdn option

// use query params to have request reverse order of returned tasks

// include task completed info on front end