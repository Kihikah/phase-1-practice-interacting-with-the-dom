// Initialize the counter
let counter = 0;
let intervalId;
let isPaused = false;

// Get elements
const counterElement = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const likesList = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('list');

// Function to update the counter
function updateCounter() {
  counterElement.textContent = counter;
}

// Start counter interval
function startCounter() {
  intervalId = setInterval(() => {
    if (!isPaused) {
      counter++;
      updateCounter();
    }
  }, 1000);
}

// Stop counter interval
function stopCounter() {
  clearInterval(intervalId);
}

// Event listener for minus button
minusButton.addEventListener('click', () => {
  if (!isPaused) {
    counter--;
    updateCounter();
  }
});

// Event listener for plus button
plusButton.addEventListener('click', () => {
  if (!isPaused) {
    counter++;
    updateCounter();
  }
});

// Event listener for heart button
heartButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = `❤️ ${counter} likes`;
  likesList.appendChild(li);
});

// Event listener for pause button
pauseButton.addEventListener('click', () => {
  if (isPaused) {
    isPaused = false;
    pauseButton.textContent = 'pause';
    startCounter();
  } else {
    isPaused = true;
    pauseButton.textContent = 'resume';
    stopCounter();
  }
});

// Event listener for comment form submission
commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const comment = commentInput.value.trim();
  if (comment) {
    const div = document.createElement('div');
    div.textContent = comment;
    commentsList.appendChild(div);
    commentInput.value = ''; // Clear input after submitting
  }
});

// Initialize counter when page loads
startCounter();
