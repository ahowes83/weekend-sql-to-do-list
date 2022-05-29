$(document).ready(onReady);

let dateTime = new Date();
dateTime = dateTime.toLocaleString();

function onReady(){
  //funcs to be run on page load
  //logic for buttons
  getTasks();
  $('#submitButton').click(addTask);
  $('#tasksOut').on('click', '.deleteTask', deleteTask);
  $('#tasksOut').on('click', '.markComplete', markComplete);
}

function addTask(){
  //add task to server and database
  let newTask = {
    added: dateTime,
    task: $('#taskIn').val(),
    complete: false
  }
  console.log('adding', newTask);
  $.ajax({
    method: 'POST',
    url: '/toDoList',
    data: newTask
  }).then(function(response){
    console.log('back from To Do List:', response);
    getTasks();
    $('#taskIn').val('');
  })
}

function getTasks(){
  $.ajax({
    method: 'GET',
    url: '/toDoList'
  }).then(function(response){
    console.log(response)
    const el = $('#tasksOut')
    el.empty();

    for (let i = 0; i < response.length; i++){
      const falseAppendable = `<td class="uncomplete"><button class="markComplete" value=${response[i].complete} data-id="${response[i].id}">Mark Complete</button></td>`;
      const trueAppendable = `<td class="completed">${response[i].time_completed}</td>`;

      function completeCheck(row) {
      return row.complete ? trueAppendable : falseAppendable;
    }
      el.append(`
      <tr id=${response[i].id}>
      <td class="added" data-id="${response[i].id}">${response[i].added}</td>
      <td class="task">${response[i].task}</td>
      ${completeCheck(response[i])}
      <td><button class="deleteTask" data-id="${response[i].id}">Delete</button> </td> </tr>`)
    }
  });
}

function deleteTask(){
  //implement delete task button
  $.ajax({
    method: 'DELETE',
    url: `/toDoList?id=${$(this).parent().parent().attr('id')}`
  }).then(function(response){
    console.log(response);
    getTasks();
  }).catch(function(err) {
    console.log(err);
  })
}

function markComplete(){
  $.ajax({
    method: 'PUT',
    url: `/toDoList?id=${$(this).parent().parent().attr('id')}`
  }).then(function(response){
    console.log(response);
    getTasks();
  }).catch(function(err){
    console.log(err);
  });
  // implement markComplete button
  // strike-through on marked complete
  // perhaps make button toggle
  // sort completed tasks to bottom or to separate table
  // if task is complete replace 'mark complete' button with time of completion
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