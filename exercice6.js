let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let defaut = "valeur par défaut";

console.log("Partie A — opérateur ??");

console.log("nom ?? defaut ->", nom ?? defaut);
console.log("age ?? defaut ->", age ?? defaut);
console.log("ville ?? defaut ->", ville ?? defaut);
console.log("score ?? defaut ->", score ?? defaut);
console.log("actif ?? defaut ->", actif ?? defaut);

console.log("---");

console.log("Partie B — opérateur ||");

console.log("nom || defaut ->", nom || defaut);
console.log("age || defaut ->", age || defaut);
console.log("ville || defaut ->", ville || defaut);
console.log("score || defaut ->", score || defaut);
console.log("actif || defaut ->", actif || defaut);

console.log("---");

console.log("Partie C — comparaison");

function comparer(nomVariable, valeur) {
    let r1 = valeur ?? defaut;
    let r2 = valeur || defaut;

    if (r1 === r2) {
        console.log(nomVariable + " : ?? et || -> même résultat");
    } else {
        console.log(nomVariable + " : ?? et || -> résultat différent");
    }
}

comparer("nom", nom);
comparer("age", age);
comparer("ville", ville);
comparer("score", score);
comparer("actif", actif);