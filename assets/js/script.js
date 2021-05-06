const allButtonNumber = document.querySelectorAll("button[data-number]");
const allButtonOperator = document.querySelectorAll("button[data-operator]");
const test = document.getElementById("operator")

console.log(operator);

//On parcours le tableaux des nombre
allButtonNumber.forEach(element => {
    //On cree une fonction qui permet d'afficher les chiffres dans les div
    element.addEventListener("click", function(){
        //Si la div operateur  est vide on ecrit dans numberOne
        if(operator.innerHTML != ""){
            numberTwo.innerHTML += this.dataset.number;
            //Si on a cliquer sur un operateur on ecrit dans numberTwo
        } else {
            numberOne.innerHTML += this.dataset.number;
            
        }
    })
});

//On parcours le tableaux des operateur
allButtonOperator.forEach(element => {
    //On cree une fonction qui permet d'afficher les operateur dans l'id operator
    element.addEventListener("click", function(){
        operator.innerHTML = this.dataset.operator;
    })
});

