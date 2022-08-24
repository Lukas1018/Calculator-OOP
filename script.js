//todo Sukurti kalkuliatorių su OOP ES6

//todo rekomendaciniai planas:
/* susikurti klasę Calculator kurios konstruktorius nustato pradines currentOperandTextElement ir previousOperandTextElement reikšmes - gali but naudojami updateDisplay() metode atnaujinti vaizda;
taip pat properties: currentOperand - skaicius esamas; previous operand - buves; operation - operacija; 
taip pat metodus: 
clear() - paspaudus AC mygtuką; gali būti panaudotas nustatyti pradines currentOperand, previousOperand ir operation vertes; 
delete() - paspaudus DEL mygtuką istrinam paskutinį įvestą skaičių; 
appendNumber(number) - pridėti paspaustą mygtuką į currentOperand esamą reikšmę; 
chooseOperation(operation) - jei turim previousOperand, tai galima atnaujinti this.operantion ir kviesti compute();
compute() - atlikti skaičiavimą naudojant this.previousOperand, this.currentOperand ir this.operation; 
updateDisplay() - skirtas updatinti current ir previousOperantTextElement.innerText - atvaizdavimui; 

susirinkti į const su DOM selectoriais: 
numberButtons; operationButtons; equalsButton; deleteButton; allClearButton; previousOperandTextElement; currentOperandTextElement; 
susidėti eventListeners and surinktų const; */

//? rekomenduojamas darbo flow
/* pasirašom klasę su metodais, bet nesirašo dar jų implementacijos;
susirenkam į constantas HTML elementus;
susikuriam naują objektą naudodami sukurtą klasę, galima įsidėt sukurtą objektą į pvz. const calculator; 
apsirašom event listenerius - kiekvienas iš jų kaip callback funkciją kviečia calculator objekto metodą atitinkantį veiksmą ir papildomai calculator.updateDisplay()
kad atnaujinti UI; 
apsirašom metodus; 
kai visas funkcionalumas veikia, CSS faile gražinam UI, rekomenduoju naudot grid mygtukų išdėliojimui;  
*/

//! nebūtina sekti rekomendacijų, nes galimų sprendimų yra n, bet surašiau, kad padėt, jei išvis nėra minčių;
//! geriau skirkit pradžioj šiek tiek laiko pagalvot bendrai bendram planui aptart ir gal savo flow sugalvosit
debugger;
const numbers = document.querySelectorAll("button[data-number]");
const operators = document.querySelectorAll("button[data-operation]");
const equals = document.querySelector("button[data-equals]");
const clearAll = document.querySelector("button[data-all-clear]");
const delButton = document.querySelector("button[data-delete]");
const currentOperandTextElement = document.querySelector(
  "div[data-current-operand]"
);
const previousOperandTextElement = document.querySelector(
  "div[data-previous-operand]"
);

class Calculator {
  constructor(currentOperandTextElement, previousOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement;
    this.previousOperandTextElement = previousOperandTextElement;
    this.operation = "";
    this.currentOperand = "";
    this.previousOperand = "";
  }
  clear() {}
  delete() {}
  appendNumber(number) {
    this.currentOperand.toString() += number.toString();
  }
  chooseOperation(operation) {}
  compute() {}
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

const calculator = new Calculator(
  currentOperandTextElement,
  previousOperandTextElement
);

numbers.forEach((button) => {
  button.addEventListener("click", calculator.appendNumber(button.innerText));
  calculator.updateDisplay();
});
operators.forEach((button) => {
  button.addEventListener(
    "click",
    calculator.chooseOperation(button.innerText)
  );
  calculator.updateDisplay();
});
equals.addEventListener("click", calculator.compute);
clearAll.addEventListener("click", calculator.updateDisplay);
delButton.addEventListener("click", calculator.delete);

console.log(calculator);
