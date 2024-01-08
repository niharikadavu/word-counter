const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const countButton = document.getElementById('countButton');
const resetButton = document.getElementById('resetButton');

countButton.addEventListener('click', () => {
  const text = textInput.value.trim();
  const words = text.split(/\s+/).filter(word => word !== '');
  wordCount.textContent = `Word Count: ${words.length}`;
});

resetButton.addEventListener('click', () => {
  textInput.value = '';
  wordCount.textContent = 'Word Count: 0';
});
