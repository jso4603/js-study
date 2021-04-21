const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('js-color');
const range = document.getElementById('js-range');
const mode = document.getElementById('js-mode');

// canvas modifer의 width와 height을 따로 설정해줘야 색칠이 됨.
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2d3436';
ctx.fillStyle = white;
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

//  캔버스 색칠 중지
function stopPainting() {
    painting = false;
}

//  캔버스 색칠 시작
function startPainting() {
    painting = true;
}

// 캔버스 안에서 마우스가 움직일 때
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting) {
        // path의 시작점을 알려줌
        ctx.beginPath();
        // path를 x,y 지점으로 이동
        ctx.moveTo(x, y);
    } else {
        // 마지막 path에서 부터 선을 잇는다.
        ctx.lineTo(x, y);
        // 선을 그린다.
        ctx.stroke();
    }
}

// click된 color로 stroke과 fill의 style color를 변경
function handleColor(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

// range의 value로 stroke의 lineWidth를 변경
function handleRange(event) {
    const width = event.target.value;
    ctx.lineWidth = width;
}

// Fill Mode 와 Paint Mode로 button toggle
function handleMode(event) {
    if (filling) {
        filling = false;
        mode.innerText = 'Fill';
    } else {
        filling = true;
        mode.innerText = 'Paint';
    }
}

// 캔버스 클릭 시
function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', handleCanvasClick);
}

// Array.from(colors) : colors object를 배열 형태로 바꿔줌.
if (colors) {
    Array.from(colors).forEach(color => color.addEventListener('click', handleColor));
}

if (range) {
    range.addEventListener('input', handleRange);
}

if (mode) {
    mode.addEventListener('click', handleMode);
}
