const canvas = document.getElementById('js-canvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('js-color');

// canvas modifer의 width와 height을 따로 설정해줘야 색칠이 됨.
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2d3436';
ctx.lineWidth = 2.5;

let painting = false;

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

function handleColor(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}

// Array.from(colors) : colors object를 배열 형태로 바꿔줌.
Array.from(colors).forEach(color => color.addEventListener('click', handleColor));
