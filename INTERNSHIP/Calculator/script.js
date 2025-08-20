const display = document.getElementById('display');
let currentInput = '';
let resetNext = false;

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const val = button.getAttribute('data-value');

    if (val === 'C') {
      currentInput = '';
    } else if (val === '←') {
      currentInput = currentInput.slice(0, -1);
    } else if (val === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else {
      if (currentInput === '0' && val !== '.') {
        currentInput = val;
      } else {
        currentInput += val;
      }
    }

    display.textContent = currentInput || '0';
  });
});
    