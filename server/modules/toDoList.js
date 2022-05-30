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
  console.log('in /"weekend-to-do-app":', req.query, req.query.id);
  let queryString = `UPDATE "weekend-to-do-app" set complete=true WHERE id=$1;`;
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