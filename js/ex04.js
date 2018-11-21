un = document.querySelector('.un');
deux = document.querySelector('.deux');
var count = 0;

function move() {
    un.classList.toggle('d-none');
    deux.classList.toggle('d-none');
    count += 1;
    document.querySelector('.nbrclick').innerText = ' ' + count;
}
document.querySelector('.moveee').addEventListener('click', move);