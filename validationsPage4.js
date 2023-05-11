let output = true;

function validationsPageFour() {
  if (!validAnswer()) {
    return false;
  } else {
    return true;
  }
}

function validAnswer() {
  let happyAnswer = document.querySelector('input[name=happy]:checked')
  let skydivingAnswer = document.querySelector('input[name=skydiving]:checked')
  let dollarAnswer = document.querySelector('input[name=dollar]:checked')
  
  if (happyAnswer === null) {
    document.querySelector("#happyValidation").textContent = "please choose one of the answers"
    output = false;
  } else document.querySelector("#happyValidation").textContent = "";

  if (skydivingAnswer === null) {
    document.querySelector("#skydivingValidation").textContent = "please choose one of the answers"
    output = false;  
  } else document.querySelector("#skydivingValidation").textContent = "";

  if (dollarAnswer === null) {
    document.querySelector("#dollarValidation").textContent = "please choose one of the answers"
    output = false;
  } else output = true;
  
  return output;
}
