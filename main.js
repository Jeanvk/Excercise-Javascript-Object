// "Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : ""David Rayy"",
// sclass : ""VI"",
// rollno : 12 };"

const student =  { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12  };
delete student.rollno;

// "Create an object which describes some of your physical or mental attributes.
// Add another property to the object. Show the complete object again.
// Delete the least important attribute. Show the complete object again."

const moi = {
nom: "Jean Vecko",
age: 24,
sexe: "masculin",
taille: 168,
poids: 67,
cheveux: "noir",
yeux: "noir",
intelligence: "élevée"
};
moi.profession = "Developpeur";
console.log(moi);
delete moi.taille;
delete moi.cheveux;
delete moi.yeux;
console.log(moi);

// "Create two objects shoe_1 and shoe_2 which characterize shoes. 
// Use the literal notation.
// Create two other objects shirt_1 and shirt_2 which characterize shirts. 
// First, create empty objects. Then, add attributes to the objects.
// Create an object warehouse and add all 4 objects to it.
// Show the price of the 4.-th product out of the warehouse object."


const shoe_1 = {
marque: "Nike",
couleur: "red",
num: 42,
prix: 99.99
};
  
const shoe_2 = {
marque: "Adidas",
couleur: "blue",
num: 40,
prix: 89.99
}
 
const shirt_1 = {
marque: "Puma",
couleur: "Rouge",
taille: "XXl",
prix: 75.50
}

const shirt_2 = {
marque: "Adidas",
couleur: "Noir",
taille: "M",
prix: 65
}

// "La carte de recettes
// Créez un objet contenant des informations sur votre recette préférée. Il doit avoir des propriétés pour le titre (une chaîne de caractères), les portions (un nombre) et les ingrédients (un tableau de chaînes de caractères). Sur des lignes séparées (une déclaration console.log pour chaque ligne), enregistrez les informations de la recette de manière à ce qu'elles ressemblent à ce qui suit : Taupe Portions : 2 Ingrédients : cannelle cumin cacao"
const recette = {
titre: "Taupe",
portions: 2,
ingredients: ["cannelle", "cumin", "cacao"]
};
console.log(recette.titre);
console.log("Portions:", recette.portions);
console.log("Ingrédients:", recette.ingredients.join(" "));
"La liste de lecture
// Gardez une trace des livres que vous avez lus et de ceux que vous voulez lire !
// Créez un tableau d'objets, où chaque objet décrit un livre et possède des propriétés pour le titre (une chaîne), l'auteur (une chaîne) et déjàLu (un booléen indiquant si vous l'avez déjà lu).
// Parcourez le tableau de livres. Pour chaque livre, enregistrez le titre et l'auteur du livre comme suit : ""Le Hobbit de J.R.R. Tolkien"".
// Utilisez maintenant une instruction if/else pour modifier la sortie selon que vous l'avez lu ou non. Si vous l'avez lu, enregistrez une chaîne comme 'Vous avez déjà lu ""Le Hobbit"" de J.R.R. Tolkien', et sinon, enregistrez une chaîne comme 'Vous devez encore lire ""Le Seigneur des Anneaux"" de J.R.R. Tolkien.'"

const livres = [
{
titre: "Le Hobbit",
auteur: "J.R.R. Tolkien",
déjaLu: true,
},
{
titre: "Le Seigneur des Anneaux",
auteur: "J.R.R. Tolkien",
déjaLu: false,
}
];
for (const i= 0; i<livres.length; i++) {
const livres = livres[i];
if (livres.déjaLu) {
console.log("Vous avez déja lu")
}
else{
console.log("Vous devez encore lire")
}
}

// "1) Créez un objet javascript qui représente un produit de magasin d'alimentation.
// L'objet doit contenir un nom, une description, un prix en gros et un prix à la consommation.
// 2. Créez un autre objet javascript qui contient une méthode unique pour imprimer le nom et la description de l'objet ci-dessus.
// 3. Créez une autre méthode sur l'objet de l'étape 2 qui renvoie le prix d'un produit avec une remise appliquée.
// Supposons que le prix du produit soit de 5, l'appel à la méthode de réduction avec une réduction de 15 % (0,15) renverra 4,25."

const produit = {
nom : "Pommes",
description : "Des bonnes pommes pour mangé",
prixGros: 1.50,
prixDetail: 2,
};
const gestionProduit = {
imprimerProduit: function() {
console.log("Nom du produit");
console.log("Description du produit");
}
}
function(remise) {
const prixApresremise = produit.prixConsomation
}

// Écrire un programme JavaScript pour obtenir la longueur d'un objet JavaScript. Exemple d'objet : var student = { name : "David Rayy", sclass : "VI", rollno : 12 } ;
const student = { 
name: "David Rayy", 
class: "VI", 
rollno: 12 
};
let length = Object.keys(student).length;
console.log("La longueur de l'objet student est : " + length);
  