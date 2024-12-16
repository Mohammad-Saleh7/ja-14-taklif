/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ['red', 'aqua', 'orange', 'purple', 'lightgreen'];
const wordElement = document.getElementById('word');
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
function updateText(text) {
    const coloredText = text.split('').map(letter => `<span style="color: ${getRandomColor()}">${letter}</span>`).join('');
    wordElement.innerHTML = coloredText;
}
const userInput = prompt('Please enter a text:');
updateText(userInput);