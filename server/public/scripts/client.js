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
      const falseAppendable = `<td class="uncomplete"><button class="markComplete" value=${response[i].complete}>Mark Complete</button></td>`;
      const trueAppendable = `<td class="completed">${response[i].time_completed}</td>`;

      const completeCheck = row => row.complete ? ['class="taskCompleted"', trueAppendable] : ['class="task"', falseAppendable];
        //changes the append contents depending on if task is marked 'complete'

      el.append(
      `<tr id=${response[i].id}>
      <td class="added">${response[i].added}</td>
      <td ${completeCheck(response[i])[0]}>${response[i].task}</td>
      ${completeCheck(response[i])[1]}
      <td><button class="deleteTask">Delete</button> </td> </tr>`)
    }
  });
}

function deleteTask(){
  $.ajax({
    method: 'DELETE',
    url: `/toDoList?id=${$(this).parent().parent().attr('id')}`   //sends id of the row (grandparent of the button)
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
}