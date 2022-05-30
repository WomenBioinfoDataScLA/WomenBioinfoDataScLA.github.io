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

//Key Dates/
const h2Dates = $('#dates-h2')
const callAbs = $('#call-abs')
const deadAbs = $('#dead-abs')
const acceptNot = $('#accept-not')
const deadVideo = $('#dead-video')
const deadRegistration = $('#dead-registration')

const h2Sponsors = $('#sponsors-h2')

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

    h2Dates.text('Datas importantes');
    callAbs.html('<td><span>&#10003;</span>Abertura da Chamada de Resumos</td> <td>16 de Maio, 2022</td>')
    deadAbs.html('<td><span>&#10003;</span>Prazo para Submissão de Resumos</td> <td>1º de Julho, 2022</td>');
    acceptNot.html('<td><span>&#10003;</span>Notificação de Aceite</td> <td>10 de Agosto, 2022</td>');
    deadVideo.html('<td><span>&#10003;</span>Prazo de Envio do Vídeo</td> <td>10 de Setembro, 2022</td>');
    deadRegistration.html('<td><span>&#10003;</span>Prazo de Inscrição</td> <td>15 de Setembro, 2022</td>');

    h2Sponsors.text('Patrocinadores');
}

function renderSpanish() {
    speakersButton.text('Oradoras');
    programButton.text('Programa');
    registrationButton.text('Inscripción');
    submissionButton.text('ENVÍOS');
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
    pAbstract.text('ENVÍOS');
    pSubmission.text('RESÚMENES');
    pPoster.text('SESIÓN');
    pSession.text('POSTER');
    pSync.text('CURSOS');
    pWorkshops.text('SINCRONICOS');
    
    h2Dates.text('Fechas Clave');
    callAbs.html('<td><span>&#10003;</span>Apertura Convocatoria de Resúmenes</td> <td>16 de Mayo, 2022</td>')
    deadAbs.html('<td><span>&#10003;</span>Plazo de Envío de Resúmenes</td> <td>1 de Julio, 2022</td>');
    acceptNot.html('<td><span>&#10003;</span>Notificación de Aceptación</td> <td>10 de Agosto, 2022</td>');
    deadVideo.html('<td><span>&#10003;</span>Plazo de Envío de Video</td> <td>10 de Septiembre, 2022</td>');
    deadRegistration.html('<td><span>&#10003;</span>Fecha Límite de Registro</td> <td>15 de Septiembre, 2022</td>');
    h2Sponsors.text('Patrocinadores');

}

spanishButton.addEventListener('click', () => {
    renderSpanish();
});

portugueseButton.addEventListener('click', () => {
    renderPortuguese();
});