let but = document.querySelector('.ok')

function name() {
    var hu = document.querySelector('input').value;
    var nam = document.querySelector('span');
    nam.innerText = hu;
}
but.addEventListener("click", name);