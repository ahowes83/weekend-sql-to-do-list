$(document).ready(onReady);

// create front end allowing user to make task
function onReady(){
  //funcs to be run on page load
  //logic for buttons
  updateDisplay()
  $('#tasksOut').click('.deleteTask', deleteTask);
  $('#tasksOut').click('.markComplete', markComplete);
}


function addTask(){
  //add task to server and database
  $.ajax({
    method: 'POST',
    url: '/todolist'
  })
}

function updateDisplay(){
  // get current tasks from server
}

function getTasks(){
  $.ajax({
    method: 'GET',
    url: '/todolist'
  }).then(function(response){
    console.log(response)
    const el = $('#tasksOut')
    el.empty();
    for (let i = 0; i < response.length; i++){
      el.append(`<tr><td class="added">${response[i].added}</td> <td class="task">${response[i].task}</td> <td> <button class="markComplete" id="box${i}">Mark Complete<button/></td> <td> <button class="deleteTask">Delete</button> </td> </tr>`)
    }
  });
}

function deleteTask(){
  //implement delete task button
}

function markComplete(){
  $.ajax({
    method: 'PUT',
    url: '/todolist'
  })
  // implement markComplete button
}


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