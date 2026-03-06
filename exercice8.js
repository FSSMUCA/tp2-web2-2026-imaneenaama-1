// variables
let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

console.log("===== RAPPORT UTILISATEUR =====")

// nom
let nomCorrige = nom.trim()
if (nomCorrige === "") {
    nomCorrige = "Inconnu"
}
console.log('nom : "' + nomCorrige + '"')

// age
let ageNombre = parseInt(age)
if (ageNombre > 0) {
    console.log("age :", ageNombre, "(valide)")
} else {
    console.log("age : valeur invalide")
}

// email
if (email.includes("@") && email.includes(".")) {
    console.log('email : "' + email + '" (valide)')
} else {
    console.log('email : "' + email + '" (invalide)')
}

// scoreJeu
let score = parseInt(scoreJeu)
if (isNaN(score)) {
    score = 0
}
console.log("scoreJeu :", score)

// estAdmin
let admin = (estAdmin === "true")
console.log("estAdmin :", admin)

// derniereConnexion
let connexion = derniereConnexion ?? "Jamais connecté"
console.log("derniereConnexion :", connexion)

// nombreConnexions
let connexions = Number(nombreConnexions)
if (connexions === 0) {
    console.log("nombreConnexions : Aucune connexion")
} else {
    console.log("nombreConnexions :", connexions)
}

console.log("===============================")