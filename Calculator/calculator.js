var num = "";
var currentOperand = "";
var result = "";
var displayedResult = document.querySelector(".displayed-result")
var numbers = document.querySelectorAll(".number");
var operands = document.querySelectorAll(".operand");
var clearBtn = document.querySelector(".clear");
var backBtn = document.querySelector(".backspace");
var allBtns = document.querySelectorAll("button");
var inputNums = [];
var operation = "";

init();

function init() {
  activateButtons();
}

function activateButtons() {
  // add logic to numbers buttons
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function (event) {
      if (event.target.classList.contains("number")) {
        num += event.target.innerText;
        displayedResult.innerText = num;

      }
    })
  }

  // add logic to operands
  for (var i = 0; i < operands.length; i++) {
    operands[i].addEventListener("click", function (event) {
      if (event.target.classList.contains("operand")) {
        runOperation(event.target.innerText)
      }
    })
  }

  // clear button
  clearBtn.addEventListener("click", clear);

  // backspace
  backBtn.addEventListener("click", backspace);

}


function runOperation(operand) {
  inputNums.push(num);
  num = "";
  if (inputNums.length === 2) {
    console.log("more than 2 inputs before calc", inputNums, currentOperand)
    var num1 = parseInt(inputNums.shift());
    var num2 = parseInt(inputNums.shift());
    if (currentOperand === "+") {
      result = num1 + num2;
    } else if (currentOperand === "-") {
      result = num1 - num2;
    } else if (currentOperand === "x") {
      result = num1 * num2;
    } else if (currentOperand === "÷") {
      result = num1 / num2;
    } else {
      console.log("EQUALS =")
    }
    displayedResult.innerText = result;
    inputNums.push(result);
  }
  currentOperand = operand;
}

function clear() {
  displayedResult.innerText = "0";
  num = "";
  currentOperand = ""
}

function backspace() {
  if (inputNums.length > 0 && num) {
    num = num.slice(0, num.length - 1)
    if (num) {
      displayedResult.innerText = num;
    } else {
      displayedResult.innerText = "0"
    }
  } else if (inputNums.length === 0 && num) {
    num = num.slice(0, num.length - 1);
    if (num) {
      displayedResult.innerText = num;
    } else {
      displayedResult.innerText = "0"
    }
  } else {
    displayedResult.innerText = inputNums[0].toString().slice(0, num.length - 1);
  }
}
