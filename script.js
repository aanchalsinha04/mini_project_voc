window.onload = function () {
  const toggleIngredientsBtn = document.getElementById('toggle-ingredients');
  const ingredientsList = document.getElementById('ingredients');
  const stepsList = document.getElementById('steps');
  const startCookingBtn = document.getElementById('start-cooking');
  const progressBar = document.getElementById('progress-bar');
  const timerDisplay = document.getElementById('timer-display');

  let currentStep = 0;
  let timer = 0;
  let timerInterval;

  toggleIngredientsBtn.addEventListener('click', () => {
    ingredientsList.classList.toggle('hidden');
    toggleIngredientsBtn.textContent = ingredientsList.classList.contains('hidden')
      ? 'Show Ingredients'
      : 'Hide Ingredients';
  });

  startCookingBtn.addEventListener('click', () => {
    stepsList.classList.remove('hidden');
    const steps = stepsList.querySelectorAll('li');
    steps.forEach(step => step.style.background = '');

    // Timer logic
    clearInterval(timerInterval);
    timer = 0;
    timerDisplay.textContent = 'Timer: 0s';
    timerInterval = setInterval(() => {
      timer++;
      timerDisplay.textContent = `Timer: ${timer}s`;
    }, 1000);

    // Step highlight + progress
    if (currentStep < steps.length) {
      steps[currentStep].style.background = '#ffe0b2';
      const progress = ((currentStep + 1) / steps.length) * 100;
      progressBar.style.width = progress + '%';
      currentStep++;
    } else {
      alert('You’ve completed all the steps! 🎉');
      currentStep = 0;
      progressBar.style.width = '0%';
      clearInterval(timerInterval);
    }
  });
};

// Chat Query Functions
function toggleChat() {
  const chatBox = document.getElementById('chat-box');
  chatBox.classList.toggle('hidden');
}

function submitQuery() {
  const textArea = document.querySelector('#chat-box textarea');
  const message = textArea.value.trim();

  if (message === '') {
    alert('Please enter your question first.');
  } else {
    alert('Thanks! We got your message: ' + message);
    textArea.value = '';
    toggleChat(); // Hide chat box after submission
  }
}
