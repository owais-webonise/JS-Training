var taskList = [];
var todoList=document.getElementById('todoList');

function addList() {
    var task = document.getElementById('todoInput').value;
    if(!task.length) {
        alert("Add Task in Text Field");
    }
    else{
        taskList.push(task);
        for(let i=0; i<taskList.length; i++) {
            var newTask = document.createElement('li');
            newTask.appendChild(document.createTextNode(taskList[i]));

            var imgDelete = document.createElement('img');
            imgDelete.src = './images/img.jpeg';
            imgDelete.height = '42';
            imgDelete.width = '42';
            imgDelete.addEventListener("click",deleteTask);
            newTask.appendChild(imgDelete);
        }
        todoList.appendChild(newTask);
    }
    document.getElementById('todoForm').reset();
}

function searchList() {
    var taskSearch = document.getElementById('todoSearch');
    var filter = taskSearch.value.toUpperCase();
    var newSearch=todoList.getElementsByTagName('li');
    for(let i=0; i<newSearch.length; i++) {
        if (newSearch[i].innerText.toUpperCase().indexOf(filter) > -1) {
                newSearch[i].style.display = "";
        } else {
                newSearch[i].style.display = "none";
        }
    }
}

function deleteTask() {
    var newDelete = this.parentNode;
    todoList.removeChild(newDelete);
}
