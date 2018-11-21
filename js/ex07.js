// function newElement() {
//     let li = document.createElement("li");
//     let inputValue = document.getElementById("myInput").value;
//     let t = document.createTextNode(inputValue);
//     li.classList.add("list-group-item");

//     li.appendChild(t);
//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";
//     let span = document.createElement("SPAN");
//     span.className = "valid";
//     let ok = document.createTextNode("\ud83d\udc4c");
//     let span2 = document.createElement("SPAN");
//     span2.className = "edit";
//     let txt = document.createTextNode("\u274c");
//     let edit = document.createTextNode("\ud83d\udd8a");
//     let span3 = document.createElement("SPAN");
//     span3.className = "close";
//     span.appendChild(ok);
//     li.appendChild(span);
//     span3.appendChild(txt);
//     li.appendChild(span3);
//     span2.appendChild(edit);
//     li.appendChild(span2);
//     let close = document.getElementsByClassName("close");
//     close.addEventListener('click', function () {

//     })
// }
// let list = document.querySelector('#ul');
// let target = document.querySelector('li');
// list.addEventListener('click', function (ev) {
//     if (ev.target.tagName === 'target') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);

// let tache = document.querySelector('.tache');
// let todos = [];
// let btnAdd = document.querySelector('.btnadd');
// let clic = document.querySelector('.clic');

// let pattern = "<div class=\"forme\">";
// let pattern2 = "<button class=\"fl2 btn mt-1 ml-4 supprimer btn-danger\">SUPPRIMER</button><button class=\"fl2 btn mt-1 ml-4 editer btn-warning\">EDITER</button><button class=\"fl2 btn btn-success mt-1 valider\">VALIDER</button></div>";


// btnAdd.addEventListener('click', function () {
//         tache.innerHTML += pattern + clic.value + pattern2;
//     todos = tache.querySelectorAll('.forme');
//     for (let i = 0; i < todos.length; i++) {
//         todos[i].querySelector('.btn-danger').addEventListener('click', function () {
//             tache.removeChild(todos[i]);

//         });
//         todos[i].querySelector('.btn-success').addEventListener('click', function () {
//             todos[i].classList.toggle('bg-success');
//         });
//     }
// });

// let todos = [];

// let pattern1 = "<div class=\"list-group-item\">"
// let pattern2 = "<button class=\"fl2 btn mt-1 ml-4 supprimer btn-danger\">SUPPRIMER</button><button class=\"fl2 btn mt-1 ml-4 editer btn-warning\">EDITER</button><button class=\"fl2 btn btn-success mt-1 valider\">VALIDER</button></div>";


// function newElement() {
//     let tasks = document.querySelector('.tasks');
//     let btntasks = document.querySelector('.addtasks');
//     let putwords = document.querySelector('.putwords').value;
//     let t = document.createTextNode(putwords);
//     let newdiv = document.createElement('div');
//     newdiv.classList.add('list-group-item');
//     if (putwords === "")
//         alert("write something");
//     else
//         newdiv.innerText = putwords;

// }
let btntasks = document.getElementsByClassName('addtasks');
let todos = [];
let tasks = document.getElementsByName('tasks');
tasks = [];

function newElement() {
    let newdiv = document.createElement("div");
    let inputValue = document.querySelector(".putwords").value;
    let t = document.createTextNode(inputValue);
    let pattern1 = "<button class=\"fl2 btn  float-right mt-1 ml-4 supprimer btn-danger\">SUPPRIMER</button><button class=\"fl2 btn  float-right mt-1 ml-4 editer btn-warning\">EDITER</button><button class=\"fl2  float-right btn btn-success mt-1 valider\">VALIDER</button></div>";
    newdiv.classList.add("list-group-item", "mt-3");
    newdiv.appendChild(t);
    newdiv.innerHTML += pattern1;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.querySelector(".tasks").appendChild(newdiv);
    }

    for (let i = 0; i < todos.length; i++) {
        tasks[i].querySelector('.btn-danger').addEventListener('click', function () {
            tasks.removeChild(todos[i]);

        });
        todos[i].querySelector('.btn-success').addEventListener('click', function () {
            todos[i].classList.toggle('bg-success');
        });
    }
}
document.querySelector('.addtasks').addEventListener('click', newElement);