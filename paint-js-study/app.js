const canvas = document.getElementById('js-canvas');

let painting = false;

//  캔버스 색칠 중지
function stopPainting() {
    painting = false;
}

// 캔버스 안에서 마우스가 움직일 때
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
}

// 캔버스 안에서 마우스가 클릭 되었을 때
function onMouseDown(event) {
    painting = true;
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseleave', stopPainting);
}
