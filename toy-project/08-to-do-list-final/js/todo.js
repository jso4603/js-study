const toDoInput = document.getElementById('todo-input');
const toDoDiv = document.querySelector('.main-div__todo-list');

const toDoLocalStorage = 'toDoList';

let toDoArray = [];

// todo정보를 load하여 있으면 paint하는 함수
function loadToDo() {
    const loadedToDo = localStorage.getItem(toDoLocalStorage);

    if (loadedToDo !== null) {
        const parsedToDo = JSON.parse(loadedToDo);
        parsedToDo.forEach(function (element) {
            paintToDo(element.id, element.toDo);
        });
    }
}

// toDoList를 localstorage에 저장하는 함수
function saveToDo() {
    localStorage.setItem(toDoLocalStorage, JSON.stringify(toDoArray));
}

// 삭제 버튼을 handle하는 함수
function handleDeleteBtn(e) {
    const clickedDiv = e.target.parentNode;
    console.log(clickedDiv);

    clickedDiv.remove();

    // 클릭된 div의 id를 toDoArray에서 걸러내고 저장
    toDoArray = toDoArray.filter(element => +element.id !== +clickedDiv.id);
    saveToDo();
}

// toDoList를 출력하는 함수
function paintToDo(id, toDo) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    const todo_info = {
        id: id,
        toDo: toDo,
    };

    span.innerText = toDo;
    deleteBtn.innerText = 'X';
    deleteBtn.addEventListener('click', handleDeleteBtn);

    div.id = id;
    div.className = 'todo-div';

    div.appendChild(span);
    div.appendChild(deleteBtn);
    toDoDiv.appendChild(div);

    toDoArray.push(todo_info);
    saveToDo();
}

// Submit을 제어하는 함수
function handleSubmit(e) {
    e.preventDefault();

    // id : 현재시간 / text : 입력받은 task
    const id = +new Date();
    const toDo = toDoInput.value;
    toDoInput.value = '';

    paintToDo(id, toDo);
}

function init() {
    loadToDo();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();
