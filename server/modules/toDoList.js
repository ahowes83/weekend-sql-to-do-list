const express = require('express');
const taskRouter = express.Router();
const pool = require('./pool');

taskRouter.get('/', (req, res)=> {
  let queryString = `SELECT * FROM "weekend-to-do-app" ORDER BY id ASC`;
  pool.query(queryString).then((results)=>{
    res.send(results.rows);
  }).catch((err)=>{
    console.log(err);
    res.sendStatus(500);
  })
});

taskRouter.post('/', (req, res)=>{
  console.log('in /weekend-sql-to-do-app POST:', req.body);
  const queryString = `INSERT INTO "weekend-to-do-app" (added, task, complete) VALUES($1, $2, $3)`;
  const values = [req.body.added, req.body.task, req.body.complete];
  pool.query(queryString, values).then((result)=>{
    res.sendStatus(201);
  }).catch((err)=>{
    console.log(err);
    res.sendStatus(500);
  });
})

taskRouter.put('/', (req, res)=>{
  console.log('in /"weekend-to-do-app":', req.query);
  let queryString = `UPDATE "weekend-to-do-app" complete=True WHERE id=$1;`;
  let values = [req.query.id];
  pool.query(queryString, values).then((results)=>{
    res.sendStatus(200);
  }).catch((err)=>{
    console.log(err);
    res.sendStatus(500);
  });
});

taskRouter.delete('/', (req, res)=>{
  console.log(`in /weekend-to-do-app:`, req.query);
  let queryString = `DELETE FROM "weekend-to-do-app" WHERE id=$1;`;
  let values = [req.query.id];
  pool.query(queryString, values).then((results)=>{
    res.sendStatus(200);
  }).catch((err)=>{
    console.log(err);
    res.sendStatus(500);
  });
});

module.exports = taskRouter;

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