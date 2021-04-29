const TO_DO_FORM = document.querySelector('.js-todo__form'),
    TO_DO_INPUT = TO_DO_FORM.querySelector('input'),
    TO_DO_LIST = document.querySelector('.js-todo__list');

const TO_DO_LIST_LOCALSTORAGE = "TO_DO_LIST";

let TO_DO_ARRAY = [];
let TO_DO_ID_NUMBER = 1; // To_DO_ID 초기화 넘버

// todo 삭제 함수
function deleteToDo(clicked) {
    const CLICKED_LI = clicked.target.parentNode;
    TO_DO_LIST.removeChild(CLICKED_LI);
    const FILTERED_TO_DO = TO_DO_ARRAY.filter(function(toDoElement) {
        return toDoElement.TO_DO_ID !== parseInt(CLICKED_LI.id);
    });
    TO_DO_ARRAY = FILTERED_TO_DO;
    saveToDo();
    console.log(TO_DO_ARRAY);

}

// todo 정보 불러오기
function loadToDo() {
    const LOADED_TO_DO = localStorage.getItem(TO_DO_LIST_LOCALSTORAGE);

    if(LOADED_TO_DO !== null) {
        const PARSED_TO_DO = JSON.parse(LOADED_TO_DO);
        PARSED_TO_DO.forEach(function(toDoElement) {
            paintToDo(toDoElement.TO_DO);
        });
    }
}

// localstorage 에 todo 정보 저장
function saveToDo() {
    localStorage.setItem(TO_DO_LIST_LOCALSTORAGE,JSON.stringify(TO_DO_ARRAY));
}

// todo 리스트 출력 함수
function paintToDo(toDoValue) {
    const LI = document.createElement('li');
    const BTN = document.createElement('button');
    const SPAN = document.createElement('span');
    const TO_DO_ID = TO_DO_ID_NUMBER;
    TO_DO_ID_NUMBER += 1;

    BTN.innerText = '❌';
    BTN.addEventListener('click',deleteToDo);
    SPAN.innerText = toDoValue;
    LI.appendChild(SPAN);
    LI.appendChild(BTN);
    LI.id = TO_DO_ID;
    TO_DO_LIST.appendChild(LI);


    const TO_DO_OBJECT = {
        TO_DO : toDoValue,
        TO_DO_ID : TO_DO_ID
    }

    TO_DO_ARRAY.push(TO_DO_OBJECT);
    saveToDo();
}

// Submit을 제어하는 함수
function handleSubmit(e) {
    e.preventDefault();
    const CURRENT_VALUE = TO_DO_INPUT.value;
    TO_DO_INPUT.value = '';
    paintToDo(CURRENT_VALUE);
}

// 초기화 함수
function init() {
    loadToDo();
    TO_DO_FORM.addEventListener('submit',handleSubmit);
};

init();