const allButtonNumber = document.querySelectorAll("button[data-number]");
const allButtonOperator = document.querySelectorAll("button[data-operator]");

//On parcours le tableaux des nombre
allButtonNumber.forEach(element => {
    //On cree une fonction qui permet d'afficher les chiffres dans l'id numberOne
    element.addEventListener("click", function(){
        numberOne.innerHTML += this.dataset.number;
    })
});

//On parcours le tableaux des operateur
allButtonOperator.forEach(element => {
    //On cree une fonction qui permet d'afficher les operateur dans l'id operator
    element.addEventListener("click", function(){
        operator.innerHTML = this.dataset.operator;
    })
});

