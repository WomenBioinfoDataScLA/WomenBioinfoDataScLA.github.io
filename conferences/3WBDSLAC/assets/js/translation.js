//Buttons//
const speakersButton = $("#speakers-nav-button");
const programButton = $('#program-nav-button');
const registrationButton = $('#registration-nav-button');
const submissionButton = $('#submission-nav-button');
const sponsorsButton = $('#sponsors-nav-button');
const commiteesButton = $('#comittees-nav-button');
const spanishButton = document.getElementById('spanish-button');
const portugueseButton = document.getElementById('portuguese-button');

//Title//

const h1Title = $('#title-h1')
const h3Title = $('#title-h3')

//Detail icons//
const pMonth = $('#month')
const pFree = $('#p-free')
const pRegistration = $('#p-registation')
const pAbstract = $('#p-abstract')
const pSubmission = $('#p-submission')
const pPoster = $('#p-poster')
const pSession = $('#p-session')
const pSync = $('#p-sync')
const pWorkshops = $('#p-workshops')



function renderPortuguese() {
    speakersButton.text('Palestrantes');
    programButton.text('Programa');
    registrationButton.text('Inscrição');
    submissionButton.text('Submissão');
    sponsorsButton.text('Patrocínio');
    commiteesButton.text('Organizadoras');
    h1Title.text('3º Congresso de Mulheres em Bioinformática & Ciência de Dados LA');
    h1Title.addClass('h1-pt');
    h1Title.removeClass('h1-en');
    h1Title.removeClass('h1-es');
    h3Title.text('Promovendo a colaboração entre mulheres');
    pMonth.text('SETEMBRO');
    pRegistration.text('GRÁTIS');
    pFree.text('INSCRIÇÃO');
    pAbstract.text('SUBMISSÃO');
    pSubmission.text('RESUMOS');
    pPoster.text('SESSÃO');
    pSession.text('POSTER');
    pSync.text('CURSOS');
    pWorkshops.text('SINCRÔNICOS');
}

function renderSpanish() {
    speakersButton.text('Oradoras');
    programButton.text('Programa');
    registrationButton.text('Inscripción');
    submissionButton.text('Sumisión');
    sponsorsButton.text('Patrocinio');
    commiteesButton.text('Organizadoras');
    h1Title.text("3ro Congreso de Mujeres en Bioinformática & Ciencia de Datos LA");
    h1Title.addClass('h1-es');
    h1Title.removeClass('h1-en');
    h1Title.removeClass('h1-pt');
    h3Title.text('Fomentando la colaboración entre mujeres');
    pMonth.text('SEPTIEMBRE');
    pRegistration.text('GRÁTIS');
    pFree.text('INSCRIPCIÓN');
    pAbstract.text('SUMISIÓN');
    pSubmission.text('RESÚMENES');
    pPoster.text('SESIÓN');
    pSession.text('POSTER');
    pSync.text('CURSOS');
    pWorkshops.text('SINCRONICOS');
}

spanishButton.addEventListener('click', () => {
    renderSpanish();
});

portugueseButton.addEventListener('click', () => {
    renderPortuguese();
});