const WEATHER_SPAN = document.querySelector('.js-weather');

const COORDS = 'COORDS';
const WEATHER_API_KEY = 'ac2d47b58d70c74e1856f5b6a987e3e8';

// 날씨를 가져오는 함수 
function getWeather(latitude, longitude) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json) {
        const TEMPERATURE = Math.round(json.main.temp);
        const PLACE = json.name;
        const WEATHER_INFO = json.weather[0].main;
        
        WEATHER_SPAN.innerText = `TEMPERATURE : ${TEMPERATURE} ℃
        PLACE : ${PLACE}
        WEATHER : ${WEATHER_INFO}`
    });
}

// 로컬 스토리지에 좌표 정보 저장
function saveCoords(coordsObject) {
    localStorage.setItem(COORDS,JSON.stringify(coordsObject));
}

// 위치 허용 했을 경우
function successPosition(position) {
    const LATITUDE = position.coords.latitude; // 위도
    const LONGITUDE = position.coords.longitude; // 경도
    const COORDS_OBJECT = {
        LATITUDE,
        LONGITUDE
    };

    saveCoords(COORDS_OBJECT);
    getWeather(LATITUDE,LONGITUDE);
}

// 위치 차단 했을 경우
function errorPosition() {
    console.log("위치 탐색 실패");
}

// 위치 좌표를 묻는 함수
function askCoords() {
    navigator.geolocation.getCurrentPosition(successPosition,errorPosition);
}

// 초기화 함수
function init() {
    const LOADED_COORDS = localStorage.getItem(COORDS);
    if(LOADED_COORDS === null) {
        askCoords();
    } else {
        const PARSED_COORDS = JSON.parse(LOADED_COORDS);
        getWeather(PARSED_COORDS.LATITUDE,PARSED_COORDS.LONGITUDE);
    }
};

init();