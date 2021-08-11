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


function keywordSearch(searchquery) {
    let poster = []

    for (let element of listDicts) {
        for (let poster of element) {
            if(poster.keyword === searchquery){

                poster.push(cosntposterNumber);
            }
        }
    }
    
    return poster;
}


function posterButtonCreat(listPosters, divPosters) {
    for (let j = 0; j < listPosters.length; j++) {
        listPosters[j].forEach(element => {
            let title = $(`
            <button id="${element.number}" class="titleposters"> 
                <h4>#${element.number} ${element.tittle}</h4>
            </button>
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
