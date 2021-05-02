const weatherInfo = document.getElementById('weather-info');

const coords = 'coords';
const weatherAPI = 'ac2d47b58d70c74e1856f5b6a987e3e8';

function getWeatherInfo(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherAPI}&units=metric`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const TEMPERATURE = Math.round(json.main.temp); // 소수점 반올림
            const PLACE = json.name;
            const WEATHER_INFO = json.weather[0].main;

            weatherInfo.innerText = `${TEMPERATURE} ℃ | ${PLACE} | ${WEATHER_INFO}`;
            weatherInfo.classList.add(showing);
        });
}

// localstorage에 좌표정보 저장
function saveCoords(coordsObj) {
    localStorage.setItem(coords, JSON.stringify(coordsObj));
}

// 위치 허용 시 좌표를 저장하고 날씨정보를 가져오는 함수
function successPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };

    saveCoords(coordsObj);
    getWeatherInfo(latitude, longitude);
}

// 위치 차단 시 console
function errorPosition() {
    alert('위치정보를 가져올 수 없습니다.\n(위치정보 차단을 해제해주세요.)');
}

// 좌표정보를 물어보는 함수
function askCoords() {
    navigator.geolocation.getCurrentPosition(successPosition, errorPosition);
}

// 초기화 시, 좌표정보를 가져온다.
// 있으면 parse 후 날씨정보를 가져온다.
// 없으면 좌표를 물어본다.
function init() {
    const loadedCoords = localStorage.getItem(coords);
    if (loadedCoords === null) {
        askCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeatherInfo(parsedCoords.latitude, parsedCoords.longitude);
    }
}

init();
