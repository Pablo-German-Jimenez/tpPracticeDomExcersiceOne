const btnDanger = document.querySelector(".btn-danger");
const numberEntered = document.getElementById("numberEntered");
const formNumberEntered = document.querySelector(".formNumberEntered");
const inputValue = document.getElementsByTagName('input');

const magicNumber=[]

function generateRandomNumber(magicNumber) {
  magicNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  console.log(magicNumber);
  }

function submmitEvent(e,numberEntered) {
  e.preventDefault();
    
  if (numberEntered.value === '') {
    
    console.log(numberEntered.value)
    console.log(inputValue.value)
        alert(`The field es empty! we're trying to guess the magic number!`)
     }
    
     
  

}


btnDanger.addEventListener("click", generateRandomNumber)

formNumberEntered.addEventListener("submit", submmitEvent)
