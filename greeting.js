const FORM = document.querySelector(".js-form"),
    INPUT = FORM.querySelector("input"),
    GREETING = document.querySelector(".js-greeting");

const USER_LOCALSTORAGE = "CURRENT_USER",
    SHOWING_CLASSNAME = "showing";

function paintGreeting(username) {
    FORM.classList.remove(SHOWING_CLASSNAME);
    GREETING.classList.add(SHOWING_CLASSNAME);
    GREETING.innerText = `Hello ${username}!`;    
}

function askName() {
    FORM.classList.add(SHOWING_CLASSNAME);
    FORM.addEventListener('submit',handleSubmit);
}

function handleSubmit(e) {
    e.preventDefault();
    const CURRENT_VALUE =  INPUT.value;
    paintGreeting(CURRENT_VALUE);
    saveName(CURRENT_VALUE);
}

function saveName(username) {
    localStorage.setItem(USER_LOCALSTORAGE,username);
}

function loadName() {
    const CURRENT_USER = localStorage.getItem(USER_LOCALSTORAGE);

    if(CURRENT_USER === null) {
        askName();
    } else {
        paintGreeting(CURRENT_USER);
    }
}

function init() {
    loadName();
};

init();