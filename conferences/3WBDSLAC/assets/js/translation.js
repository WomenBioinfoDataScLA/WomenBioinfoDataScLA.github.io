//Buttons//
const speakersButton = $("#speakers-nav-button");
const programButton = $('#program-nav-button');
const sponsorsButton = $('#sponsors-nav-button');
const commiteesButton = $('#comittees-nav-button');
const spanishButton = document.getElementById('spanish-button');
const portugueseButton = document.getElementById('portuguese-button');

//Text//

const h1Title = $('#title-h1')

function renderPortuguese() {
    speakersButton.text('Palestrantes');
    programButton.text('Programa');
    sponsorsButton.text('Patrocinadores');
    commiteesButton.text('Organizadoras');
    h1Title.text('3º Congresso de Mulheres em Bioinformática & Ciência de Dados LA');
    h1Title.addClass('h1-pt');
    h1Title.removeClass('h1-en');
    h1Title.removeClass('h1-es');
}

function renderSpanish() {
    speakersButton.text('Oradoras');
    programButton.text('Programa');
    sponsorsButton.text('Patrocinadores');
    commiteesButton.text('Organizadoras');
    h1Title.text("3ro Congreso de Mujeres en Bioinformática & Ciencia de Datos LA");
    h1Title.addClass('h1-es');
    h1Title.removeClass('h1-en');
    h1Title.removeClass('h1-pt');
}

spanishButton.addEventListener('click', () => {
    renderSpanish();
});

portugueseButton.addEventListener('click', () => {
    renderPortuguese();
});