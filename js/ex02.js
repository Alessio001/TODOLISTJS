function refresh(sauf) {

    let allDivExo = document.querySelectorAll(".exercices")
    let count = allDivExo.length;

    for (let i = 0; i < count; i++) {
        allDivExo[i].classList.add("hidden");
    }
    document.getElementById(sauf).classList.remove("hidden")
}