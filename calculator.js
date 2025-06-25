let buttons = document.querySelectorAll("button");
let input = document.getElementById("result");

function clearValues() {
  input.value = "";
}

function calculeResult() {
  try {
    let calculated_values = eval(input.value);
    input.value = calculated_values;
  } catch (error) {
    if (error instanceof SyntaxError) {
      input.value = "Syntax Error";
    } else {
      throw error;
    }
  }
}

function addValues(value) {
  input.value += value;
  // input.value = input.value + button_value
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let button_value = buttons[i].textContent;

    if (button_value == "C") {
      clearValues();
    } else if (button_value == "=") {
      calculeResult();
    } else {
      addValues(button_value);
    }
  });
}
