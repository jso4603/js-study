const nameForm = document.getElementById('name-form');
const toDoForm = document.getElementById('todo-form');
const nameInput = document.getElementById('name-input');
const userInfo = document.getElementById('user-info');
const toDoTitle = document.querySelector('.main-div__todo-title');

const NAME_LOCALSTORAGE = 'name',
    showing = 'showing';

// todo를 입력할 수 있는 form을 출력하는 함수
function printTodoForm() {
    toDoForm.classList.add(showing);
    toDoTitle.classList.add(showing);
}

// 이름을 출력하는 함수
function printName(name) {
    nameForm.classList.remove(showing);
    userInfo.classList.add(showing);
    userInfo.innerText = `${name}님, 안녕하세요!`;
}

// input에서 입력받은 name을 localstorage에 저장하는 함수
function saveName(inputName) {
    localStorage.setItem(NAME_LOCALSTORAGE, inputName);
}

// name submit을 다루는 함수
// name을 저장해주고 출력해준다.
function handleSubmit(e) {
    e.preventDefault();
    const inputName = nameInput.value;
    printName(inputName);
    printTodoForm();
    saveName(inputName);
}

// 이름을 물어보는 함수
// 입력을 받으면 submit을 handle 한다.
function askName() {
    nameForm.classList.add(showing);
    nameForm.addEventListener('submit', handleSubmit);
}

// 로컬스토리지에서 이름을 불러오는 함수
// 있으면 print 없으면 ask
function loadName() {
    const name = localStorage.getItem(NAME_LOCALSTORAGE);

    if (name === null) {
        askName();
    } else {
        printName(name);
        printTodoForm();
    }
}

function init() {
    loadName();
}

init();
