var taskList = [];
var ul=document.getElementById('todoList');

function addList() {
    var task = document.getElementById('todoInput').value;
    if(!task.length) {
        alert("Add Task in Text Field");
    }
    else{
        taskList.push(task);
        for(let i=0; i<taskList.length; i++) {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(taskList[i]));

            var imgDelete = document.createElement('img');
            imgDelete.src = './images/img.jpeg';
            imgDelete.height = '42';
            imgDelete.width = '42';
            imgDelete.addEventListener("click",deleteTask);
            li.appendChild(imgDelete);
        }
        ul.appendChild(li);
    }
    document.getElementById('todoForm').reset();
}

function searchList() {
    var taskSearch = document.getElementById('todoSearch');
    var filter = taskSearch.value.toUpperCase();
    var li=ul.getElementsByTagName('li');
    for(let i=0; i<li.length; i++) {
        if (li[i].innerText.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
        } else {
                li[i].style.display = "none";
        }
    }
}

function deleteTask() {
    var li = this.parentNode;
    ul.removeChild(li);
}
