const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (button.id === 'clear') {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    if (button.id === 'equals') {
      try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    if (resultDisplayed && !['+', '-', '*', '/'].includes(value)) {
      currentInput = '';
      resultDisplayed = false;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});
