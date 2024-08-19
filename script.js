document.addEventListener('DOMContentLoaded', function(){
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function(){
        const taskText = input.value.trim();
        if (taskText !== ''){
            addTask(taskText);
            input.value = '';
        }
    });

    input.addEventListener('keypress', function(e){
        if (e.key === 'Enter'){
            const taskText = input.value.trim();
            if (taskText !== ''){
                addTask(taskText);
                input.value = '';
            }
        }
    });

    function addTask(taskText){
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function(){
            todoList.removeChild(li);
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }








});
