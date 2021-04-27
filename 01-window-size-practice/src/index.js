// <⚠️ DONT DELETE THIS ⚠️>
// import './styles.css';
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector('body');

body.style.color = 'white';
body.style.backgroundColor = '#fdcb6e';

function handleResize(event) {
    const windowWidth = event.target.innerWidth;

    if (windowWidth <= 700) {
        body.style.backgroundColor = '#0984e3';
    } else if (windowWidth <= 1200) {
        body.style.backgroundColor = '#6c5ce7';
    } else {
        body.style.backgroundColor = '#fdcb6e';
    }
}

window.addEventListener('resize', handleResize);
