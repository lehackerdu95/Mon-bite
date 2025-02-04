const btn = document.getElementById('btn')
const message = document.getElementById('message')
let compteur = 0



btn.addEventListener('click', () => {
    // alert("Clique OK")
    //console.log("clique OK")
    compteur++
    message.textContent = compteur.toString()

})