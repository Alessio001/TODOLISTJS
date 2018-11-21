 export function changement() {
     var titre = document.querySelectorAll("h2")[0]

     titre.innerText = 'le Titre modifié'
     titre.style.color = 'red'
     titre.classList.add('bg-primary')
 }
 changement();