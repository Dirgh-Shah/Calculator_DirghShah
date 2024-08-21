const buttons = document.querySelectorAll('input[type="button"]');
const answerDisplay = document.getElementById('answers');

let currentInput = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (value === '=') {
      try {
        const result = eval(currentInput);
        answerDisplay.textContent = result;
        currentInput = result.toString();
      } catch (error) {
        answerDisplay.textContent = 'Error';
        currentInput = '';
      }
    } else if (value === 'C') {
      currentInput = '';
      answerDisplay.textContent = '';
    } else if (['+', '-', '*', '/'].includes(value)) {
      operator = value;
      currentInput += value;
    } else {
      currentInput += value;
      answerDisplay.textContent = currentInput;
    }
  });
});
