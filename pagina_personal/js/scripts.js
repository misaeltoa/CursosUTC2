document.addEventListener('DOMContentLoaded', () => {

    const factTextElement = document.getElementById('fact-text');

    const funFacts = [
        "Me gusta mucho el Pozole.",
        "Disfruto programar.",
        "Mi videojuego favorito es Lies of P.",
        "En mi tiempo libre a toco guitarra.",
    ];

    const changeFact = () => {
        let currentFact = factTextElement.textContent;
        let newFact;

        do {
            const randomIndex = Math.floor(Math.random() * funFacts.length);
            newFact = funFacts[randomIndex];
        } while (newFact === currentFact);

        factTextElement.textContent = newFact;
    };

    if (factTextElement) {
        factTextElement.addEventListener('click', changeFact);
    }
    
});