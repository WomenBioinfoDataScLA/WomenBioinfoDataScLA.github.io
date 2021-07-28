function createSearchSection(){
    const mainSearcherSectionDiv = $(`
        <section class="buscador-section active" id="buscador-section">
        <h1 class="title">Inspírate, busca, guarda, y crea <br> los mejores <span class="gifos-text">GIFOS</span></h1>
        <img src="assets/images/ilustra_header.svg" alt="buscador-img" class="buscador-img">
        <div class="buscador" id="buscador">
            <img src="assets/images/icon-search.svg" alt="lupa" class="lupa lupa-suplementaria">
            <input type="text" placeholder=" Search.." name="search" class="search-input" id="search-input">
            <img src="assets/images/icon-search.svg" alt="lupa" class="lupa active" id="lupa">
            <img src="assets/images/close.svg" alt="close-icon" class="close-icon" id="close-icon">
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