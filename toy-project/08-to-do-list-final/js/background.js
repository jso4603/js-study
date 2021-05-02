const body = document.querySelector('body');
const changeBtn = document.getElementById('background-change__btn');
const cancelBtn = document.getElementById('background-cancel__btn');

const imgNumber = 4;

// 배경화면을 지우는 함수
function deleteBackGroundImage() {
    const backGroundImage = document.querySelector('.background');

    if (backGroundImage) {
        backGroundImage.remove();
    }
}

// 이미지 load를 handle 하는 함수
function handleImageLoad(backGroundImg) {
    deleteBackGroundImage();
    backGroundImg.classList.add('background');
    body.prepend(backGroundImg);
}

// 배경화면을 출력하는 함수
function paintBackGroundImage() {
    const imgNumber = getRandomNumber();
    const backGroundImage = new Image();
    backGroundImage.src = `backgrounds/background${imgNumber}.jpg`;
    backGroundImage.addEventListener('load', handleImageLoad(backGroundImage));
}

// 이미지 수 범위내의 랜덤숫자를 만드는 함수
function getRandomNumber() {
    const number = Math.floor(Math.random() * imgNumber + 1);
    return number;
}

changeBtn.addEventListener('click', paintBackGroundImage);
cancelBtn.addEventListener('click', deleteBackGroundImage);
