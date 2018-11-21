function create() {
    var img = document.createElement("img");
    img.src = "../chien.jpg";
    var src = document.getElementById("x");

    src.appendChild(img);
}
document.querySelector('.btnimg').addEventListener('click', create)