let wordList = []; // Liste des mots et leurs traductions

function loadCSV() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    
    if (file) {
        Papa.parse(file, {
            complete: function(results) {
                wordList = results.data; // On garde les données dans wordList
                console.log(wordList); // Affiche la liste des mots
                displayWord(); // Affiche un mot aléatoire
            },
            header: true, // Permet de traiter la première ligne comme des clés
        });
    }
}

// Attacher la fonction à l'événement click du bouton
document.getElementById("loadButton").addEventListener("click", loadCSV);
