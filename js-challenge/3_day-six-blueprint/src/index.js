// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector('select');

// select 변화를 감지하여 local storage에 value를 넣어줌.
function handleSelect(e) {
    localStorage.setItem('country', e.target.value);
}

// 초기화 시 국가 정보를 ls에서 가져와 select.value에 넣어줌
function loadCountry() {
    const country = localStorage.getItem('country');
    if (country) {
        select.value = country;
    }
}

select.addEventListener('change', handleSelect);

function init() {
    loadCountry();
}

init();
