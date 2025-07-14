const btnDanger = document.querySelector("#btnBtn");
const numberEntered = document.getElementById("numberEntered");

function generateRandomNumber(e) {
  if(numberEntered.value===""){
    alert(`Field empty!`)
   return
  }
  e.preventDefault();
  const magicNumber = Math.floor(Math.random() ) + 2;
  console.log(magicNumber);

   if(!isNaN(numberEntered.value))
 {
    btnDanger.textContent = "I'll have luck!";
    btnDanger.classList.replace("btn-danger", "btn-success");
    if(numberEntered.value!==magicNumber){
      alert(`Wrong number!`)
      
    }
     if(numberEntered==magicNumber){
      alert(`Correct number broo`)
    }
   
 }
  
}

btnDanger.addEventListener("click", generateRandomNumber);
