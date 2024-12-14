function displayWord() {
    if (wordList.length > 0) {
        // Choisir un mot aléatoire
        const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        const frenchWord = randomWord.word;  // Le mot français
        const correctTranslation = randomWord.translation; // La traduction correcte

        // Générer deux traductions aléatoires
        let randomTranslations = [];
        while (randomTranslations.length < 2) {
            const randomTranslation = wordList[Math.floor(Math.random() * wordList.length)].translation;
            if (!randomTranslations.includes(randomTranslation) && randomTranslation !== correctTranslation) {
                randomTranslations.push(randomTranslation);
            }
        }

        // Mélanger les réponses pour avoir 3 propositions
        const options = [correctTranslation, ...randomTranslations];
        options.sort(() => Math.random() - 0.5); // Mélanger les options

        // Générer les boutons avec un <span> à l'intérieur
        let optionsHtml = options.map(option => {
            return `<button><span>${option}</span></button>`;
        }).join("");

        // Afficher le mot et les options
        const wordDisplay = document.getElementById("wordDisplay");
        wordDisplay.innerHTML = `
            <p>Quel est la traduction de <strong>${frenchWord}</strong> ?</p>
            ${optionsHtml}
        `;

        // Ajouter des gestionnaires d'événements après le rendu
        const buttons = wordDisplay.querySelectorAll("button");
        buttons.forEach(button => {
            button.addEventListener("click", function() {
                const selected = button.textContent.trim();
                checkAnswer(selected, correctTranslation);
            });
        });
    }
}
