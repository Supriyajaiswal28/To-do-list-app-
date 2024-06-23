let listContainer = document.getElementById
('list-container');

let inputBox = document.getElementById
('input-box');

function addTask(){
    if(inputBox.value === ''){
        alert('Add your task');
    }
    else{
        let task = document.createElement('li');
        task.textContent = inputBox.value;
        listContainer.appendChild(task);

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

// el is parameter
listContainer.addEventListener('click', (el)=>{
    if (el.target.tagName == 'LI'){
        el.target.classList.toggle('Checked');
        saveData();
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove();
        saveData();
    }
})

// local storage for saving the dATA

function saveData(){
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// function to show data

function showData(){
    listContainer.innerHTML = localStorage.getItem('tasks');
}
// call show data function
showData()
