// import "./styles.css";

const dDay = document.querySelector('h2');

// You're gonna need this
function getTime() {
    // Don't delete this.
    // 크리스마스 이브 날짜
    const xmasDay = new Date('2021-12-24:00:00:00+0900');
    // 현재 날짜
    const today = new Date();

    // 크리스마스 까지 남은 날짜 per millsecond
    const milliSecond = xmasDay - today;

    // 남을 날짜를 일,시간,분,초 로 나눔
    const second = Math.floor((milliSecond / 1000) % 60);
    const minute = Math.floor((milliSecond / 1000 / 60) % 60);
    const hour = Math.floor(milliSecond / 1000 / 60 / 60) % 24;
    const day = Math.floor(milliSecond / 1000 / 60 / 60 / 24);

    // d-day 문자열 생성
    const dDayInfo = `${day}day ${hour}hour ${minute}minute ${second}second`;

    dDay.innerText = dDayInfo;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
