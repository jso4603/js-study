const CLOCK_CONTAINER = document.querySelector('.js-clock'), 
    CLOCK_TITLE = CLOCK_CONTAINER.querySelector('h1');

// 시간을 얻는 함수
function getTime() {
    const DATE = new Date();
    const HOURS = DATE.getHours();
    const MINUTES = DATE.getMinutes();
    const SECONDS = DATE.getSeconds();
    const MILLI_SECONDS = DATE.getMilliseconds();

    CLOCK_TITLE.innerText = `${formatTime(HOURS)}:${formatTime(MINUTES)}:${formatTime(SECONDS)}:${MILLI_SECONDS}`;
}

// 시,분,초 가 10 이하일 때는 0을 붙여서 return하는 함수
function formatTime(hms) {
    if(hms <10) {
        return `0${hms}`;
    } else {
        return hms;
    }
};

// 초기화 함수
function init() {
    setInterval(getTime,1);
};

init();