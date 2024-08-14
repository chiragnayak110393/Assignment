document.addEventListener('DOMContentLoaded', () => {
  const progressFill = document.getElementById('progressFill');
  const currentValueDisplay = document.getElementById('currentValue');
  let value = 0; 
  let history = []; 
  let redoStack = []; 

  document.getElementById('subtract').addEventListener('click', () => {
      if (value > -15) {
          history.push(value);
          redoStack = []; 
          value--;
          updateProgressBar(value);
      }
  });

  document.getElementById('add').addEventListener('click', () => {
      if (value < 150) {
          history.push(value);
          redoStack = []; 
          value++;
          updateProgressBar(value);
      }
  });

  document.getElementById('undo').addEventListener('click', () => {
      if (history.length > 0) {
          redoStack.push(value);
          value = history.pop();
          updateProgressBar(value);
      }
  });


  function updateProgressBar(value) {
      const percentage = ((value + 15) / 165) * 100; 
      progressFill.style.width = `${percentage}%`;
      currentValueDisplay.textContent = value; 
  }
});
