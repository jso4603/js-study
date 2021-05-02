const clockInfo = document.getElementById('clock-info');

// 시간을 정해진 형식으로 format하는 함수
function timeFormat(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return `${time}`;
    }
}

// 시간을 출력하는 함수
function printClock() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    clockInfo.innerText = `${timeFormat(hour)}:${timeFormat(minute)}:${timeFormat(second)}`;
}

// 1초 단위로 printClock함수를 호출
function init() {
    setInterval(printClock, 1000);
}

init();
