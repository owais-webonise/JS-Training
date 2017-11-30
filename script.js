var todoList = new Array();
var ul=document.getElementById('todoList');
function addList() {
	
	var inputValue = document.getElementById('todoInput').value;

	if (inputValue.length == 0){
		alert("Add Task in Text Field");
	}
	else{
            todoList.push(inputValue);
            for(let i=0;i<todoList.length;i++){
            	var li = document.createElement('li');
            	li.appendChild(document.createTextNode(todoList[i]));

            	var imgDelete = document.createElement('img');
            	imgDelete.src = 'img.jpeg';
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
	var a;
	var inputValue = document.getElementById('todoSearch');
	var filter = inputValue.value.toUpperCase();
	
	var li=ul.getElementsByTagName('li');
	for(let i=0;i<li.length;i++){
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
