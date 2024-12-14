function checkAnswer(selected, correct) {
    const buttons = document.querySelectorAll('#wordDisplay button');
    buttons.forEach(button => {
        if (button.textContent.trim() === correct) {
            button.classList.add('correct');
        } else if (button.textContent.trim() === selected) {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    setTimeout(() => {
        buttons.forEach(button => {
            button.classList.remove('correct', 'incorrect');
            button.disabled = false;
        });
        displayWord(); // Afficher un nouveau mot
    }, 1500);
}
