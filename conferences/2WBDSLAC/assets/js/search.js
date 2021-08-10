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


function keywordSearch(listDicts, searchWord) {
    const poster = []
    listDicts.map(keywdsList => keywdsList.map(element => {
        const posterNumber = element['number'];
        element['keyword'].map(keywd => {
            if (keywd === searchWord) {
                poster.push(cosntposterNumber);
            }
        });
    }))

    return poster;
}


function posterButtonCreat(listPosters, divPosters) {
    for (let j = 0; j < listPosters.length; j++) {
        listPosters[j].forEach(element => {
            let title = $(`
            <button id="${element.number}" class="titleposters"> 
                <h3>#${element.number} ${element.tittle}</h3>
            </button>
            `);
            title.appendTo($(divPosters[j]));
        });
    }
}

function renderPosterInfo(element, parentDiv){
    const posterDiv =  $(
        `<div class="content">
        <h4>Poster ${element.number}: ${element.tittle}</h4>
        <div class="poster-video">
            <img alt="" src="./assets/img/${element.poster}">
            <iframe width="360" height="315" src="${element.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>`
    ); 
    posterDiv.appendTo(parentDiv);
    
}

function searchPosterByNumber(id) {
    listDicts.map(element => {
        element.map(poster => {
            if(poster.number === id){
                return poster;
            }
        });
    });
}
