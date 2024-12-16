//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red
function changeColorOfTheYear() {
    const yearElement = document.querySelector('h1');
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'cyan'];
    let colorIndex = 0;

    setInterval(() => {
        yearElement.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);
}
function applyChallengeStatusColors() {
    const challenges = document.querySelectorAll('li');

    challenges.forEach(challenge => {
        if (challenge.textContent.includes('Done')) {
            challenge.style.backgroundColor = 'lightgreen';
        } else if (challenge.textContent.includes('Ongoing')) {
            challenge.style.backgroundColor = 'yellow';
        } else {
            challenge.style.backgroundColor = 'red';
        }
    });
}
changeColorOfTheYear();
applyChallengeStatusColors();