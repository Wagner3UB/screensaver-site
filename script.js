let idleTime = 0;
let idleInterval = setInterval(checkIfIdle, 1000);

document.addEventListener('mousemove', resetIdleTime, false);
document.addEventListener('keypress', resetIdleTime, false);
document.addEventListener('touchmove', resetIdleTime, false);

function resetIdleTime() {
  idleTime = 0;
}

const focusHandle = () => {
  document.getElementById('risparmio').focus();
};

function checkIfIdle() {
  idleTime += 1000;
  if (idleTime >= 5000) {
    document.getElementById('risparmio').style.width = '100%';
    focusHandle();
    clearInterval(setInterval(checkIfIdle, 1000));
  }
}

const energySavingScreenOFF = () => {
  document.getElementById('risparmio').style.width = '0';
  resetIdleTime();
  clearInterval(setInterval(checkIfIdle, 1000));
};

document.addEventListener('keydown', energySavingScreenOFF, false);
