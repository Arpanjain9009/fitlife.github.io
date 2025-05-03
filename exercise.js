function increaseCount(exercise) {
    let countElement = document.getElementById(exercise);
    let count = parseInt(countElement.innerText);
    countElement.innerText = count + 1;
}
