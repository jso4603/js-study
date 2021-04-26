// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const ADD_FORM = document.getElementById('add-form'),
    ADD_INPUT = document.getElementById('add-input'),
    PENDING_LIST = document.getElementById('pending-list'),
    FINISHED_LIST = document.getElementById('finished-list');

const PENDING_LOCALSTORAGE = 'PENDING',
    FINISHED_LOCALSTORAGE = 'FINISHED';

let PENDING_ARRAY = [],
    FINISHED_ARRAY = [];

// localstorage의 tasks 정보를 가져옴
function loadTasks() {
    const LOAD_PENDING = localStorage.getItem(PENDING_LOCALSTORAGE);
    const LOAD_FINISHED = localStorage.getItem(FINISHED_LOCALSTORAGE);

    if (LOAD_PENDING !== null) {
        const PARSE_PENDING = JSON.parse(LOAD_PENDING);
        PARSE_PENDING.forEach(function (pendingElement) {
            printPendingList(pendingElement.id, pendingElement.text);
        });
    }

    if (LOAD_FINISHED !== null) {
        const PARSE_FINISHED = JSON.parse(LOAD_FINISHED);
        PARSE_FINISHED.forEach(function (finishedElement) {
            printFinishedList(finishedElement.id, finishedElement.text);
        });
    }
}

// 취소, 완료 버튼에 따라 pendingBtn을 제어
function handlePendingBtn(e) {
    // 클릭된 리스트 pending list 에서 삭제
    const CLICKED_VALUE = e.target.innerText;
    const CLICKED_LI = e.target.parentNode;

    if (CLICKED_VALUE === '✅') {
        const TASK_ID = CLICKED_LI.id;
        const TASK_TEXT = CLICKED_LI.childNodes[0].innerText;
        printFinishedList(TASK_ID, TASK_TEXT);
    }

    PENDING_LIST.removeChild(CLICKED_LI);

    // 클릭된 li의 id를 PENDING_ARRAY에서 걸러내고 저장
    PENDING_ARRAY = PENDING_ARRAY.filter(pendingElement => +pendingElement.id !== +CLICKED_LI.id);
    saveTasks();
}

// localstorage에 array정보 저장
function saveTasks() {
    localStorage.setItem(PENDING_LOCALSTORAGE, JSON.stringify(PENDING_ARRAY));
    localStorage.setItem(FINISHED_LOCALSTORAGE, JSON.stringify(FINISHED_ARRAY));
}

// 취소, 되돌리기 버튼에 따라 finishedBtn을 제어
function handleFinishedBtn(e) {
    // 클릭된 리스트 pending list 에서 삭제
    const CLICKED_VALUE = e.target.innerText;
    const CLICKED_LI = e.target.parentNode;

    if (CLICKED_VALUE === '⏪') {
        const TASK_ID = CLICKED_LI.id;
        const TASK_TEXT = CLICKED_LI.childNodes[0].innerText;

        // id : 클릭 된 li의 id / text : 클릭 된 li의 span의 text
        printPendingList(TASK_ID, TASK_TEXT);
    }

    FINISHED_LIST.removeChild(CLICKED_LI);

    // 클릭된 li의 id를 FINISHED_ARRAY에서 걸러내고 저장
    FINISHED_ARRAY = FINISHED_ARRAY.filter(finishedElement => +finishedElement.id !== +CLICKED_LI.id);
    saveTasks();
}

// Task를 FinishedList에 넣고 출력하는 함수
function printFinishedList(taskId, taskText) {
    const LI = document.createElement('li');
    const SPAN = document.createElement('span');
    const DELETE_BTN = document.createElement('button');
    const RETURN_BTN = document.createElement('button');

    const TASK_INFO = {
        id: taskId,
        text: taskText,
    };

    SPAN.innerText = taskText;
    DELETE_BTN.innerText = '❌';
    DELETE_BTN.addEventListener('click', handleFinishedBtn);
    RETURN_BTN.innerText = '⏪';
    RETURN_BTN.addEventListener('click', handleFinishedBtn);

    LI.appendChild(SPAN);
    LI.appendChild(DELETE_BTN);
    LI.appendChild(RETURN_BTN);
    LI.id = taskId;

    FINISHED_LIST.appendChild(LI);

    FINISHED_ARRAY.push(TASK_INFO);
    saveTasks();
}

// Task를 PendingList에 넣고 출력하는 함수
function printPendingList(taskId, taskText) {
    const LI = document.createElement('li');
    const SPAN = document.createElement('span');
    const DELETE_BTN = document.createElement('button');
    const CHECK_BTN = document.createElement('button');

    const TASK_INFO = {
        id: taskId,
        text: taskText,
    };

    SPAN.innerText = taskText;
    DELETE_BTN.innerText = '❌';
    DELETE_BTN.addEventListener('click', handlePendingBtn);
    CHECK_BTN.innerText = '✅';
    CHECK_BTN.addEventListener('click', handlePendingBtn);

    LI.appendChild(SPAN);
    LI.appendChild(DELETE_BTN);
    LI.appendChild(CHECK_BTN);
    LI.id = taskId;

    PENDING_LIST.appendChild(LI);

    PENDING_ARRAY.push(TASK_INFO);
    saveTasks();
}

// addTask submit을 handle
function handelSubmit(e) {
    e.preventDefault();

    // id : 현재시간 / text : 입력받은 task
    const TASK_ID = +new Date();
    const TASK_TEXT = ADD_INPUT.value;

    printPendingList(TASK_ID, TASK_TEXT);
    ADD_INPUT.value = '';
}

function init() {
    loadTasks();
    ADD_FORM.addEventListener('submit', handelSubmit);
}

init();
