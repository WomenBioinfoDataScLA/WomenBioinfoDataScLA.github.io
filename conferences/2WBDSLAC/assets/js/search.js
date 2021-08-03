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

function keywordSearch(listDicts) {
    const keywords = []
    listDicts.map(keywdsList => keywdsList.map(element => {
        element['keyword'].map(keywd => keywords.push(keywd));
    }))

    return keywords;
}