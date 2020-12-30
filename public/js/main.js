// ** En utilisant des prompts et des alerts**

// > 1. Affiche uniquement la premiere lettre du prénom
let name = Beny
prompt('first letter of your name ?')
alert(nom.charAt(0))
var nom = "Beny"
// var res = name.charAt(0)
console.log(nom.charAt(0))
// > 2. Affiche la dernière lettre du prénom de la personne
// prompt('last letter of your name ?')
// alert(nom.charAt(3))
// console.log(nom.charAt(3))
let dernierelettre = nom.charAt(nom.length -1)
alert(`Derniere lettre ${prenom} = ${dernierelettre}`)
// > 3. Affiche le prénom sans sa première lettre
nom 
alert(nom.substring(1))
console.log(nom)
// > 4. Affiche le prénom de la personne mais avec la 2eme lettre en majuscule uniquement (rentre un prénom en minuscule dans le prompt)
// name.charAt(2).toUpperCase()
alert.charAt(nom.toUpperCase(1))
// > 5. Demande a l'utilisateur d'entrer son prénom puis demande lui quelle lettre il veut mettre en majuscule, affiche lui son prénom avec la lettre désirée en majuscule

// > 6. Quel que soit la façon dont a été entré le prénom, le nom se réaffiche avec la première lettre est en majuscule et le reste en minuscule

// > 7. Affiche le prénom de la personne mais avec une lettre aléatoire retirée (bonus)



// Exercice 2

//1 affiche 1er lettre 
let prenom = prompt('Votre prénom?').toLocaleLowerCase();
// let premsLettre = prenom.charAt(0);
// alert(`Première lettre de ${prenom} = ${premsLettre}`);

//2 affiche dernière lettre
// let derniereLettre = prenom.charAt(prenom.length -1);
// alert(`Derniere lettre ${prenom} = ${derniereLettre} `);

//3 Affiche le prénom sans sa 1er lettre 
// alert(prenom.substring(1))

//4
// alert(prenom.charAt(0) + prenom.charAt(1).toLocaleUpperCase() + prenom.slice(2));

// let upper = prenom.charAt(1)
// alert(prenom.replace(upper, upper.toUpperCase()))

//5
// let lettre = prompt(`Quelle lettre voulez-vous mettre en majuscule dans '${prenom}'`).toLowerCase();
// alert(prenom.replace(lettre, lettre.toUpperCase()));

//6
// let firstUpper = prenom.charAt(0);
// alert(prenom.replace(firstUpper, firstUpper.toUpperCase()));
// alert(prenom.charAt(0).toUpperCase() + prenom.substring(1))


//7
let nbAl = Math.round(Math.random()*prenom.length);

alert(prenom.replace(prenom.charAt(nbAl), ""));
