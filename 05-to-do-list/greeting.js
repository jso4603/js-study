const GREETING_FORM = document.querySelector(".js-greeting__form"),
    GREETING_INPUT = GREETING_FORM.querySelector("input"),
    GREETING_TITLE = document.querySelector(".js-greeting__title");

const USER_LOCALSTORAGE = "CURRENT_USER",
    SHOWING_CLASSNAME = "showing";

// User 인사를 출력하는 함수
function paintGreeting(username) {
    GREETING_FORM.classList.remove(SHOWING_CLASSNAME);
    GREETING_TITLE.classList.add(SHOWING_CLASSNAME);
    GREETING_TITLE.innerText = `Hello ${username}!`;    
}

// user가 null일 경우 
function askName() {
    GREETING_FORM.classList.add(SHOWING_CLASSNAME);
    GREETING_FORM.addEventListener('submit',handleSubmit);
}

// Submit을 제어하는 함수
function handleSubmit(e) {
    e.preventDefault();
    const CURRENT_VALUE =  GREETING_INPUT.value;
    paintGreeting(CURRENT_VALUE);
    saveName(CURRENT_VALUE);
}

// user 이름을 localstorage에 저장
function saveName(username) {
    localStorage.setItem(USER_LOCALSTORAGE,username);
}

// user 이름을 localstorage에서 load
function loadName() {
    const CURRENT_USER = localStorage.getItem(USER_LOCALSTORAGE);

    if(CURRENT_USER === null) {
        askName();
    } else {
        paintGreeting(CURRENT_USER);
    }
}

// 초기화 함수
function init() {
    loadName();
};

init();