function additionne() {

    var terme1 = +document.getElementById("input1").value;
    var terme2 = +document.getElementById("input2").value;

    document.getElementById("result").textContent = (terme1 + terme2);

}
document.querySelector('.btnresult').addEventListener('click', additionne);



//Calculatrice lvl 2


var putnbr = document.querySelector('.putnbr');
var moins = document.querySelector('.moins');
var egal = document.querySelector('.egal');
var plus = document.querySelector('.plus');
var fois = document.querySelector('.fois');
var diviser = document.querySelector('.diviser');
var a = document.querySelector('.a');
var b = document.querySelector('.b');
var c = document.querySelector('.c');
var d = document.querySelector('.d');
var e = document.querySelector('.e');
var f = document.querySelector('.f');
var g = document.querySelector('.g');
var h = document.querySelector('.h');
var i = document.querySelector('.i');
var j = document.querySelector('.j');
let e = document.getElementById("lancelot");
a.addEventListener("click", function () {
    e.value += "0";
})
b.addEventListener("click", function () {
    e.value += "1";
})
c.addEventListener("click", function () {
    e.value += "2";
})
d.addEventListener("click", function () {
    e.value += "3";
})
e.addEventListener("click", function () {
    e.value += "4";
})
f.addEventListener("click", function () {
    e.value += "5";
})
g.addEventListener("click", function () {
    e.value += "6";
})
h.addEventListener("click", function () {
    e.value += "7";
})
i.addEventListener("click", function () {
    e.value += "8";
})
j.addEventListener("click", function () {
    e.value += "9";
})
plus.addEventListener("click", function () {
    operateur = "+";
    elem1 = e.value;
    e.value += operateur;
});
moins.addEventListener("click", function () {
    operateur = "-";
    elem1 = e.value;
    e.value += operateur;
});
fois.addEventListener("click", function () {
    operateur = "*";
    elem1 = e.value;
    e.value += operateur;
});
diviser.addEventListener("click", function () {
    operateur = "/";
    elem1 = e.value;
    e.value += operateur;
});
egal.addEventListener("click", function () {
    switch (operateur) {
        case "+":
            index = e.value.indexOf("+") + 1;
            elem2 = e.value.substring(index);
            result = Number(elem1) + Number(elem2);
            e.value = result;
            break;
        case "-":
            index = e.value.indexOf("-") + 1;
            elem2 = e.value.substring(index);
            result = Number(elem1) - Number(elem2);
            e.value = result;
            break;
        case "*":
            index = e.value.indexOf("*") + 1;
            elem2 = e.value.substring(index);
            result = Number(elem1) * Number(elem2);
            e.value = result;
            break;
        case "/":
            index = e.value.indexOf("/") + 1;
            elem2 = e.value.substring(index);
            result = Number(elem1) / Number(elem2);
            e.value = result;
            break;
    }
});

function c() {
    e.value = "";
}
efface.addEventListener("click", c)