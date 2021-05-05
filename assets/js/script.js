const dataNumber = document.querySelectorAll("div[data-number='number']");

dataNumber.forEach(element => {
     element.addEventListener("click", function(){
         console.log(this)
     })
 });