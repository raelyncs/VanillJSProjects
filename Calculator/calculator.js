var num = "";
var currentOperand = "";
var result = "";
var displayedResult = document.querySelector(".displayed-result")
var numbers = document.querySelectorAll(".number");
var operands = document.querySelectorAll(".operand");
var clearBtn = document.querySelector(".clear")
var backBtn = document.querySelector(".backspace")
var inputNums = [];
var operation = "";

function runOperation(operand){
  inputNums.push(num);
  num = "";
  if(inputNums.length === 2){
    console.log("more than 2 inputs", inputNums, currentOperand)
    var num1 = parseInt(inputNums.shift());
    var num2 = parseInt(inputNums.shift());
    if(currentOperand === "+"){
      console.log("ADDITION", num1 + num2);
      result = num1 + num2;
    } else if (currentOperand === "-"){
      console.log("SUBTRACT", num1 - num2);
      result = num1 - num2;
    } else if (currentOperand === "x"){
      console.log("MULTIPLY", num1 * num2);
      result = num1 * num2;
    } else if ("DIVIDE", currentOperand === "÷"){
      console.log(num1 / num2);
      result = num1 / num2;
    } else{
      console.log("EQUALS =")
    }
    displayedResult.innerText = result;
    inputNums.push(result);
  }
  currentOperand = operand;


  //console.log("inputNums:" + inputNums + " currentOperand:" + currentOperand + " operations: " + operations)

}

init();

function init(){
  activateButtons();
}

function activateButtons(){
  // add logic to numbers buttons
  for(var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function (event){
      if(event.target.classList.contains("number")){
        num += event.target.innerText;
        displayedResult.innerText = num;

      }
      console.log(num)
    })
  }

  // add logic to operands
  for(var i = 0; i < operands.length; i++){
    operands[i].addEventListener("click", function (event){
      if(event.target.classList.contains("operand")){
        runOperation(event.target.innerText)
      }
    })
  }

  // clear button
  clearBtn.addEventListener("click", clear);

  // backspace
  backBtn.addEventListener("click", backspace);

}

function clear(){
  displayedResult.innerText = "0";
  num = "";
  currentOperand = ""
}

function backspace(){
  /*
    3 scenarios

    1. multiple operations have been done (num is empty at this point)
        access inputNums[0] which is an integer and remove last digit
    2. num is empty remove last digit on string
  */

  //3. if inputnums has a number  and input string has a stringNum remove digit on string EXAMPLE [50] "34"
  if(inputNums.length > 0 && num){
    num = num.slice(0, num.length-1)
    if(num){
      displayedResult.innerText = num;
    } else {
      displayedResult.innerText = "0"
    }
 }
  console.log(inputNums, num)
  console.log("in progress")
}
