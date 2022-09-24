const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')
btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerId = null;

btnStart.addEventListener('click', onBtnStart)
btnStop.addEventListener('click', onBtnStop)


function onBtnStart() {
    btnStart.disabled = true;
    btnStop.disabled = false;
    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
        
    }, 1000);

}
function onBtnStop() {
   clearInterval(timerId);
    btnStart.disabled = false;
    btnStop.disabled = true;
   
}


