const BODY = document.querySelector('body');

const BACKGROUND_IMG_NUMBER = 5;

function getRandomNumber() {
    const NUMBER = Math.floor(Math.random() * BACKGROUND_IMG_NUMBER + 1);
    return NUMBER;
}

function handleImageLoad(backgroundImage) {
    backgroundImage.classList.add('backGroundImage');
    BODY.prepend(backgroundImage); // prepend : 부모의 자식요소 위치 중 제일 앞에 위치
}

function paintBackgroundImage(imageNumber) {
    const BACKGROUND_IMAGE = new Image();
    BACKGROUND_IMAGE.src = `js-backgrounds/background${imageNumber}.jpg`;
    BACKGROUND_IMAGE.addEventListener("load",handleImageLoad(BACKGROUND_IMAGE));   
}

function init() {
    const randomNumber = getRandomNumber();
    paintBackgroundImage(randomNumber);
};

init();