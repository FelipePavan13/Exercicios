let task = document.getElementById('task-input');
let addBtn = document.getElementById('btn');
let list = document.getElementById('task-list');
let listArray = [];

onload = function() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        list.innerHTML += `<li>${tasks[i]}<button class="rmv-btn">X</button></li>`;
    };
    let rmvBtn = document.getElementsByClassName('rmv-btn');
    for (let i = 0; i < rmvBtn.length; i++) {
        rmvBtn[i].addEventListener('click', removeTask);
    };
}

function addTask() {
    let taskName = task.value;

    let item = document.createElement('li');
    item.textContent = taskName;
    list.appendChild(item);
    listArray.push(taskName);
    localStorage.setItem('tasks', JSON.stringify(listArray));

    let removeButton = document.createElement('button');
    removeButton.addEventListener('click', removeTask);
    removeButton.textContent = 'X';
    item.appendChild(removeButton);
}

function removeTask(e) {
    e.target.parentNode.remove();
}

addBtn.addEventListener('click', addTask);