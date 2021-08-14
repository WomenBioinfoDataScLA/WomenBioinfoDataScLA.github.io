function createSearchSection() {
    const mainSearcherSectionDiv = $(`
        <section class="buscador-section active" id="buscador-section">
        <img src="./assets/img/Elementos_Persona.png">
        <h2 class="title">2WBDS LA Posters</h2>
        <div class="buscador" id="buscador">
            <input type="text" placeholder=" Search a poster by keywords.." name="search" class="search-input" id="search-input">
        </div>
        </section>`);
    return mainSearcherSectionDiv
}


function keywordSearch(searchquery) {
    let posters = [];

    for (let element of listDicts) {
        for (let poster of element) {
            if(poster.keywords.toLowerCase().includes(searchquery.toLowerCase().trim())){
                posters.push(poster);
            }
        }
    }

    return posters;
}


function renderSuggestions(element, parentDiv){
    const li = document.createElement('li');
    const anchor = document.createElement('a');

    anchor.href = '#';
    anchor.innerHTML =  'POSTER #' + element.number +' '+ element.tittle;

    li.appendChild(anchor);
    parentDiv.appendChild(li);
}

function searchInput() {
    const input = document.getElementById('search-input');

    return input.value
}


function posterButtonCreat(listPosters, divPosters) {
    for (let j = 0; j < listPosters.length; j++) {
        listPosters[j].forEach(element => {
            let title = $(`
            <div>
                <button id="${element.number}" class="titleposters collapsible"> 
                    <h4>#${element.number} ${element.tittle}</h4>
                </button>
            </div>
            `);
            title.appendTo($(divPosters[j]));
        });
    }
}

function searchPosterByNumber(id) {
    for (let element of listDicts) {
        for (let poster of element) {
            if(poster.number === id){
                return poster;
            }
        }
    }
}
