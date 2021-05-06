const allButtonNumber = document.querySelectorAll("button[data-number]");
const allButtonOperator = document.querySelectorAll("button[data-operator]");
const resultCalc = document.querySelector("button[data-result]");


//On parcours le tableaux des nombre
allButtonNumber.forEach(element => {
    //On cree une fonction qui permet d'afficher les chiffres dans les div
    element.addEventListener("click", function(){
        //Si on a cliquer sur un operateur on ecrit dans numberTwo
        if(operator.innerHTML != ""){
            numberTwo.innerHTML += this.dataset.number;
            //Si la div operateur est vide on ecrit dans numberOne
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


resultCalc.addEventListener("click", function(){
    switch (operator.innerHTML) {
        case "+":
            result.innerHTML = +numberOne.innerHTML + +numberTwo.innerHTML;
            break;
        case "-":
            result.innerHTML = +numberOne.innerHTML - +numberTwo.innerHTML;
            break;
        case "X":
            result.innerHTML = +numberOne.innerHTML * +numberTwo.innerHTML;
            break;
        case "/":
            result.innerHTML = +numberOne.innerHTML / +numberTwo.innerHTML;
            break;
        case "%":
            result.innerHTML = +numberOne.innerHTML % +numberTwo.innerHTML;
            break;
        default:
            "Veuillez mettre un opérateur";
            break;
    }
})