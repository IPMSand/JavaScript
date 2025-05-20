// variables

const addTask = document.getElementById('add-task-btn');
const taskContainer = document.getElementById('task-list');
const inputTask = document.getElementById('task');

// EventListener

addTask.addEventListener('click', function(){


    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
     li.innerText = inputTask.value; 
    task.appendChild(li);

    taskContainer.appendChild(task);
})

