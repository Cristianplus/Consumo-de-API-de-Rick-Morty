function getCharacters(done) {

    const results = fetch('https://rickandmortyapi.com/api/character');

    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}

getCharacters(data => {

    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(/*html*/`
        <article>

            <div class="image-container">
                <img src="${personaje.image}" alt="personaje">
            </div>

            <h2>${"Nombre"}: ${personaje.name}</h2> 
            <span>${"Estado"}: ${personaje.status}</span>
            <span>${"Especie"}: ${personaje.species}</span>
            <span>${"Género"}: ${personaje.gender}</span>
            <span>${"Origen"}: ${personaje.origin.name}</span>
            
        </article>
        `);

        const main = document.querySelector('main');

        main.append(article);
    });
});