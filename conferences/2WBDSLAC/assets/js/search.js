function createSearchSection() {
    const mainSearcherSectionDiv = $(`
        <section class="buscador-section active" id="buscador-section">
        <h2 class="title">2WBDS LA Posters</h2>
        <div class="buscador" id="buscador">
            <input type="text" placeholder=" Search a poster by keywords.." name="search" class="search-input" id="search-input">
                        <ul class="sugerencias" id="sugerencias">
                <li class="space-top"></li>
                <li class="sugerencia1" id="sugerencia1"></li>
                <li class="sugerencia2" id="sugerencia2"></li>
                <li class="sugerencia3" id="sugerencia3"></li>
            </ul>
        </div>
        </section>`);
    return mainSearcherSectionDiv
}


let listDicts = [BioinfoDisease, Structural, ChemoDrug, GenEvol, MlDataMining, Edu]

function keywordSearch(listDicts, searchWord) {
    const poster = []
    listDicts.map(keywdsList => keywdsList.map(element => {
        cosntposterNumber = element['number'];
        element['keyword'].map(keywd => {
            if (keywd === searchWord) {
                poster.push(cosntposterNumber);
            }
        });
    }))

    return poster;
}


function posterButtonCreat(listPosters, divPosters) {
    for (let j = 0; j < dicts.length; j++) {
        dicts[j].forEach(element => {
            let title = $(`
            <button id="${element.number}" class="titleposters"> 
                <h3>#${element.number} ${element.title}</h3>
            </button>
            `);
            title.appendTo($(divPosters[j]));
        });
    }
}