// <⚠️ DONT DELETE THIS ⚠️>
// import './styles.css';
// <⚠️ /DONT DELETE THIS ⚠️>

const insertRange = document.getElementById('insert-range'),
    rangeMax = document.getElementById('range-max'),
    insertNumber = document.getElementById('insert-number'),
    insertForm = document.getElementById('insert-form'),
    youChose = document.getElementById('you-chose'),
    machineChose = document.getElementById('machine-chose'),
    resultWin = document.getElementById('result-win');

// 내 점수와 랜덤점수를 비교해 우승자를 출력
function handleSubmit(e) {
    e.preventDefault();
    const myNumber = insertNumber.value;
    const machineNumber = Math.floor(Math.random() * insertRange.value + 1);

    youChose.innerText = `You Chose : ${myNumber} ,`;
    machineChose.innerText = `The Machine Chose : ${machineNumber}`;
    resultWin.innerText = myNumber > machineNumber ? 'You Win!' : 'You lose!';
}

// range가 바뀔 때 마다 rangeMax 글자를 바꿔 줌.
function handleRange(e) {
    rangeMax.innerText = e.target.value;
}

insertRange.addEventListener('input', handleRange);
insertForm.addEventListener('submit', handleSubmit);
