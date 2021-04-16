let form = document.querySelector("form")
let name = form.querySelector('input[name="name"]')
let price = form.querySelector('input[name="price"]')
let category = form.querySelector('#category')
let description = form.querySelector('textarea')

let edit = document.querySelectorAll(".edit")
let remove = document.querySelectorAll(".remove")

edit.forEach(editElement => editElement.onclick = function() {
    name.value = this.parentElement.parentElement.querySelector("h2").innerHTML
    price.value = this.parentElement.parentElement.querySelector(".productPrice").innerHTML.slice(0, -1)
    description.value = this.parentElement.parentElement.querySelector("span").innerHTML
    if(this.parentElement.parentElement.querySelector("em").innerHTML == "Pâtisserie Individuelle") {
        category.getElementsByTagName("option")[1].selected = true
    } else {
        category.getElementsByTagName("option")[2].selected = true

    }
    // console.log(document.documentElement.scrollTop)
    // console.log(form.getBoundingClientRect())
    let clientRect = form.getBoundingClientRect()
    scrollTo(0, document.documentElement.scrollTop - Math.abs(clientRect.y))
})

remove.forEach(removeElement => removeElement.onclick = function() {
    // faire une requête serveur en POST et supprimer l'élément dans la page
    alert("Erreur")
})