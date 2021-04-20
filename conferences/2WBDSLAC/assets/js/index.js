const ham = document.getElementById('ham-list');
const cross = document.getElementById('cross-icon');
const navOptions = document.getElementById('nav-options');
const codeSection = document.getElementById("code-of-conduct-section");
const aboutSection = document.getElementById("about-inner");
const codeButton = document.getElementById("code-button-section");
const speakersButton = $("#speakers-nav-button");
const speakersSection = $('#speakers-section');
const sponsorsButton = $('#sponsors-nav-button');
const sponsorSection = $('#sponsorship-section');
const posterSection = $('#poster-section');
const posterButton = $('#poster-button');
const registrationSection = $('#registration-section');
const registrationButton = $('#registration-nav-button');
const committeeSection = $('#comittees-section');
const committeeButton = $('#comittees-nav-button');
const sponsorTitleSuport = document.getElementById('sponsors-tittle-suport');
const sponsorsLogosDiv = document.getElementById('sponsors-logos');
const orgasLogosDiv = document.getElementById('orgas-logos');
const datesSection = $('#key-dates');
const datesbutton = $('#keydates-button');
const workshopButton = $('#workshops-button');

const spanishButton = document.getElementById('spanish-button');
const portugueseButton = document.getElementById('portuguese-button');
const h1About = document.getElementById('about-h1');
const pAbout = document.getElementById('about-p');
const ConductText = document.getElementById('conduct-text');
const h2Title = document.getElementById('tittle-h2');
const h3Title = document.getElementById('tittle-h3');
const h2dates = document.getElementById('key-dates-h2');
const thdates = document.getElementById('key-dates-th');
const open1 = document.getElementById('date-open-1');
const open2 = document.getElementById('date-open-2');
const close1 = document.getElementById('date-close-1');
const close2 = document.getElementById('date-close-2');
const notify1 = document.getElementById('date-notify-1');
const notify2 = document.getElementById('date-notify-2');
const h2Sponsors = document.getElementById('sponsors-h2');
const h4Contact = document.getElementById('contact-h4');
const h4Media = document.getElementById('socialmedia-h4');

function disableElement(element) {
    element.classList.add('disable');
}

function enableElement(element) {
    element.classList.remove('disable');
}

function cleanBody() {
    disableElement(aboutSection);
    disableElement(sponsorsLogosDiv);
    disableElement(orgasLogosDiv);
    disableElement(sponsorTitleSuport);
    speakersSection.empty();
    $(codeSection).empty();
    sponsorSection.empty();
    posterSection.empty();
    committeeSection.empty();
    registrationSection.empty();
    datesSection.empty();

}

function renderCodeCon() {
    const introDiv = document.createElement('div');
    const secDiv = document.createElement('div');
    const consequenceDiv = document.createElement('div');
    const unexpectedDiv = document.createElement('div');
    const reportDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3Security = document.createElement('h3');
    const h3Unexpected = document.createElement('h3');
    const h3Consequence = document.createElement('h3');
    const h3Report = document.createElement('h3');
    const pSecurity = document.createElement('p');
    const pUnexpected = document.createElement('p');
    const pConsequence = document.createElement('p');
    const pReport = document.createElement('p');
    const pIntro = document.createElement('p');
    const imgBottom = document.createElement('img');
    const imgBottom2 = document.createElement('img');


    h2.innerHTML = "Code of Conduct";
    pIntro.innerHTML = 'Women in Bioinformatics and Data Science LA is a community congress intended for networking and collaboration in the scientific community. We value the participation of each member of this community and want all attendees to have an enjoyable and fulfilling experience. We are dedicated to providing a respectful, harassment-free community for everyone. We do not tolerate harassment or bullying of any community member in any form. This does not only extend to members to local Women in Bioinformatics and Data Science LA communities but to anyone who chooses to become involved in the larger Women in Bioinformatics and Data Science LA community of scientists, users, developers, and integrators through events or interactions. Therefore, we have created this code of conduct that all participants are expected to read and adhere to.';

    h3Security.innerHTML = "Security and expected behaviour during virtual events and workshops";
    pSecurity.innerHTML = 'Participants should be logged in the virtual conference using their full names. Any participant without appropriate identification and not registered will be removed from the session. If you need guidance on how to change your name in the conference ask one of the organizers and they will help you. Participants are expected to participate in an active and authentic way through a kind, considerate and respectful dialogue, thus contributing to the continuity of the community. Also, to be aware of their environment and the rest of the people who participate and notify the organization in case you observe any situation that is dangerous or that violates this Code of Conduct, even if it seems to have no consequences.';

    h3Unexpected.innerHTML = "Unexpected behaviour and forms of harassment and discrimination";
    pUnexpected.innerHTML = "Will be considered as unacceptable behavior: Offensive comments, such as those related to gender, gender identity, gender expression, sexual orientation, physical abilities, mental health, physical appearance, ethnicity or religion. Unwanted comments about a person's lifestyle choices or practices, including those related to food, health, work, parenting, or drug use. Intentional and incorrect use of chosen pronouns or name when referring to a person. Sexual images or comments in public or online spaces, deliberate intimidation, bullying, stalking, following, harassing photography or recording, sustained disruption of talks, IRC chats, electronic meetings, physical meetings or other events, inappropriate physical contact, or unwelcome sexual attention; private communication that does not stop when requested. Other forms of harassment and discriminatory behavior include, but are not limited to: offensive verbal comments related to gender, gender identity and expression, sexual orientation, ability, physical appearance, body size, race, ethnicity, religion, socioeconomic status, caste or creed and are considered unacceptable. If any of these behaviors is detected or reported, participants will be asked to stop and to comply immediately.";

    h3Consequence.innerHTML = "Consequences for Harassment and Discrimination";
    pConsequence.innerHTML = "If a participant engages in harassing behavior, representatives of the community may take reasonable action they deem appropriate, including warning the offender, expulsion from any Women in Bioinformatics and Data Science LA event, or expulsion from mailing lists, IRC chats, discussion boards and other electronic communications channels to resolve the issue. This may include expulsion from Women in Bioinformatics and Data Science LA conference.";

    h3Report.innerHTML = "How to Report Harassment and Discrimination";
    pReport.innerHTML = 'If you are being harassed, notice that someone else is being harassed, or have any other concerns, please act to intercede or ask for help from any member of the Women in Bioinformatics and Data Science LA community, IRC chat admins, website admins, or organizers/representatives of any physical events put on under the auspices of Women in Bioinformatics and Data Science LA. We encourage you to report any incident of harassment, discrimination, or unacceptable behavior as soon as possible. The Women in Bioinformatics and Data Science LA leadership team will take great care to ensure that the assistance provided meets the needs of attendees who were affected.';

    imgBottom.src = "./assets/img/hojas.png"
    imgBottom.alt = "code-img"
    imgBottom.classList = "code-img-left"

    imgBottom2.src = "./assets/img/hojas.png"
    imgBottom2.alt = "code-img"
    imgBottom2.classList = "code-img-right"

    introDiv.appendChild(h2);
    introDiv.appendChild(pIntro);

    secDiv.appendChild(h3Security);
    secDiv.appendChild(pSecurity);

    unexpectedDiv.appendChild(h3Unexpected);
    unexpectedDiv.appendChild(pUnexpected);

    consequenceDiv.appendChild(h3Consequence);
    consequenceDiv.appendChild(pConsequence);

    reportDiv.appendChild(h3Report);
    reportDiv.appendChild(pReport);


    codeSection.appendChild(introDiv);
    codeSection.appendChild(secDiv);
    codeSection.appendChild(unexpectedDiv);
    codeSection.appendChild(consequenceDiv);
    codeSection.appendChild(reportDiv);
    codeSection.appendChild(imgBottom);
    codeSection.appendChild(imgBottom2);
}


const speakersList = [
    { "name": "Daniela Robles", 'img': 'Daniela_Robles_square.png', "filiation": "UNAM - Mexico" },
    { "name": "Janet Gonzalez", "img": "Janneth_Gonzalez.png", "filiation": "PUJ - Colombia" },
    { "name": "Sara Cuadros Orellana", 'img': 'Sara_Cuadros.JPG', "filiation": "UCM - Chile" },
    { "name": "Patricia Acosta Vargas", 'img': 'Patricia Acosta.jpg', "filiation": "UDLA - Chile" },
    { "name": "Daiana Mir", 'img': 'daiana_mir.jpg', "filiation": "UGB - CENUR - UdelaR - Uruguay" },
    { "name": "Maria Luisa Serrano García", 'img': 'Maria_Luisa_Serrano_squared.jpg', "filiation": "Fac. de Farmacia - UCV Venezuela" },
    { "name": "Gabriela de Queiroz", 'img': 'Gabriela_Queiroz_squared.jpg', "filiation": "IBM - USA" },
    { "name": "Georgina Stegmayer", 'img': 'GeorginaStegmayer_square.png', "filiation": "UNL - CONICET - Argentine" },
    { "name": "Han Sun", 'img': 'Han_sun_squared.jpeg', "filiation": "Leibniz - Forschungsinstitut - Germany" }
];

function renderSpeakersBios() {
    const pictsDivRow = $('<div class="bios-container"></div>');
    const imgLeft = $(`<img src="./assets/img/hojas.png" alt="hojas-left" class="speakers-img-left">`);
    const imgRight = $(`<img src="./assets/img/hojas.png" alt="hojas-right" class="speakers-img-right">`);

    speakersList.forEach(element => {

        const speakerBio = $(`
        <figure class="speaker-bio"> 
            <img src="./assets/img/speakers/${element.img}" alt="${element.name}-img"> 
            <figcaption class="caption-bio">${element.name}</figcaption>
            <figcaption class="sub-caption-bio">${element.filiation}</figcaption>
        </figure>`);
        speakerBio.appendTo(pictsDivRow);
    });

    pictsDivRow.appendTo(speakersSection);
    imgRight.appendTo(speakersSection);
    imgLeft.appendTo(speakersSection);
}


function renderSponsorshipSection() {
    const sponsorsSectionContent = $(`
    <div class="sponrship-content">
    <img src="./assets/img/Elementos_mujer 2.png" alt="hojas">
    <h2>Sponsorship opportunities</h2>
    <p>The Network of Women in Bioinformatics and Data
    Science LA is a community seeking to reduce the gender
    gap in STEM. This is an opportunity to support and
    promote the dissemination of the work carried out by
    women and leading dissidents in the fields of IT and
    academic research</p>
    <p> We offer a variety of sponsorship opportunities, including advertisement space in our conference program and website.
    For information on sponsorship opportunities, please download the sponsorship <a target=”_blank” href="https://drive.google.com/file/d/1myA94IjMknfAJIAqnQTTakabAooh5f7z/view?usp=sharing">brochure.</a>
    If you need more information on sponsorship, please email:</p> <p>womenbioinformaticsnetworkla@gmail.com</p>
    </div>`);

    sponsorsSectionContent.appendTo(sponsorSection);
}

function renderRegistrationSection() {
    const registrationContent = $(`
    <h2>Registration</h2>
    <p><strong>Latin American Congress of Women in Bioinformatics and Data Science</strong> is a free event open to the entire community, which brings together professionals, students, academics, businesswomen, public officials and hobbyists. The main purpose of the meeting is to promote and make visible the research carried out by women and dissidents in the field of Bioinformatics and Data Science.</p>
    <p>This congress focuses on the areas of systems biology, omics technologies, artificial intelligence, machine learning, data science, data mining and high performance computing with biological applications in public and private sectors.</p>
    <hr class="separator">
    <p>Access the registration form <a target="_blank" href="https://forms.gle/AKFMaoqqZ1ghvXN58"> here</a></p>
    <p>Submit your abstract <a target="_blank" href="https://easychair.org/conferences/?conf=2ndwbdsla" >here</a></p>
    <hr class="separator">
    
    <h3>Volunteers</h3>
    <p>If you want to join the volunteers' team to help us during the event, please complete this <a target="_blank" href="#">form</a> and soon you will be contacted. Thank you!!</p>
    `);

    registrationContent.appendTo(registrationSection);
}


function renderPosterSessionSection() {
    const posterSessionContent = $(`
    <article>
        <h2>Poster Submission</h2>
        <p>After receiving the notification that your abstract has been accepted for poster presentation, you will be able to submit your poster. Submitting a poster comprises on sending a file in png format of the poster and a pre-recorded presentation of 3-5 minutes explaining the poster.</p>
    </article>
    <article>
        <h2>Poster and Video Instructions</h2>
        <p>Please send it before the 10th of September to the official email account: <a href="#" target="_blank">womenbioinformaticsnetworkla@gmail.com</a></p>
        <h3>Poster</h3>
        <p>Participants must create a 45 cm x 53 cm high-resolution image with all the poster information in English, using the background image <a target="_blank" href="#">provided</a> by the organizing committee. The poster should be in png format.  Please send the poster to the conference official email account, using the Subject: Virtual Poster Session. The file name should be named with the last name of the first author and the EasyChair submission number:
            “Velez_Rueda_Poster5.png”. To clearly explain your work to a broad technical audience, we recommend the following content for the image: Title, author list, affiliation, and
            the abstract: background, or motivation to your approach, method or techniques, results, conclusions, and any related references.
        </p>
        <h3>Video</h3>
        <p>It is mandatory that authors also send the pre-record of their poster talk (3-5 minutes), which will be uploaded on our <a target="_blank" href="https://www.youtube.com/watch?v=anq8YaRMQDo&feature=youtu.be">Youtube Channel</a> and will be presented on our website along with the poster. Save your presentation as an MP4 file. Please send the video to the conference official email account, using the Subject: Virtual Poster Session. The file name should be named with the last name of the first author and the EasyChair submission number: “Velez_Rueda_Poster5.mp4”.
        </p>
        <h3>Twitter</h3>
        <p>
        Participants can also post their posters on Twitter at the beginning of the conference using a single tweet with the poster image and a brief explanation. In order to increase the visibility and associate it with the conference, please use the hashtags <strong>#VirtualPostersSession</strong> and <strong>#2WBDS_LA</strong>. 
        Please use the handle <a target="_blank" href="https://twitter.com/BioinfoLa">@BioinfoLa</a> as well so that we will receive a notification. Other suggestions for hashtags are #bioinformatics <strong>#datascience #WomenSTEM</strong> or the topics of the congress <strong>#DeepLearning #DataMining&BigDataAnalysis #Chemoinformatics&DrugDiscovery #Genomics&Evolution #SystemsBiology #StructuralBioinformatics #BiomolecularSimulations #Bioinformatics&Diseases #Education</strong>. 
        If the poster is associated with a preprint/publication, we advise you to post a second tweet with its url.
        In case you are in a country that does not allow Twitter posting, please send it to the official email account before the 10th of September and we will post it for you.</p>

        <h2>Virtual Poster Session</h2>
        <p>We will hold a Virtual Poster Session that will take place on this website and also on Twitter. 
        It will start one week before the conference (22nd to 24th September 2021) and will continue until the end of the conference. 
        All official posters will be retweeted by <a target="_blank" href="https://twitter.com/BioinfoLa">@BioinfoLa</a>. 
        </p>
 
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <h3>Who can send an abstract?</h3>
        <p>This event is open to the entire community, anyone can send an abstract for the poster session and be selected for oral presentation. </p>
        <h3>How will be the selection for oral presentation?</h3>
        <p>All abstracts will be reviewed by 2 specialists in the field. According to their recommendations, the Scientific Committee will determine if the abstract is presented as oral or poster. </p>
        <h3>Who will receive a certificate for the poster presentation?</h3>
        <p>Only one registered author by poster will receive a certificate. By default it will be the first author of the poster. In case that the first author is not registered to the congress, the registered author will receive the certificate. In such a case, the responsible for the poster (registered to the congerss) must notify the organizers at the time of submission by email.</p>
        <h3>Who is the corresponding author?</h3>
        <p>Correspondence will be sent to the author indicated as corresponding at the time of submission.</p>
        <h3>Can I send only the poster?</h3>
        <p>No. Poster submission requires a poster and a video.</p>
        <h3>Can I send only the video?</h3>
        <p>No, Poster submission requires a poster and a video.</p>
        <h3>Which topics does the congress have?</h3>
        <ul>
            <li>Bioinformatics and Diseases</li>
            <li>Biomolecular Simulations, Structural Bioinformatics & Systems Biology</li>
            <li>Chemoinformatics and Drug Discovery</li>
            <li>Genomics and Evolution</li>
            <li>Machine Learning, Data mining and Big Data Analysis</li>
            <li>Education</li>
        </ul>
    </article>
    `);

    posterSessionContent.appendTo(posterSection);
}


function renderCommitteesSection() {
    const committeeContent = $(`
    <h2>Scientific Committee Chairs</h2>
    <ul>
        <li>Wendy González,  Universidad de Talca - CBSM, Chile</li>
        <li>Cristina Marino-Buslje, Fundación Instituto Leloir - CONICET, Argentine</li>
    </ul>
    <hr class="separator">
    <h2>Executive Committee</h2>
    <ul>
        <li>Ana Julia Velez Rueda, Universidad Nacional de Quilmes - CONICET, Argentine</li>
        <li>Lucy Jiménez, IT - Machine Learning - Mercado Libre, Colombia</li>
        <li>Liliane Conteville, IOC - Fiocruz, Brazil</li>
        <li>Ivana Feldfeber, Observatorio de Datos con Perspectiva de Género, Argentine</li>
        <li>Agustina Nardo, CIDCA- CONICET, Argentine</li>
        <li>Mercedes Didier Garnham, Trypanosomatics Lab, IIB-UNSAM, Argentine</li>
    </ul>
    `);

    committeeContent.appendTo(committeeSection)
}

function renderPortuguese() {
    registrationButton.text('Inscreva-se');
    speakersButton.text('Palestrantes');
    sponsorsButton.text('Patrocinadores');
    committeeButton.text('Organizadoras');
    h1About.innerHTML = "2ª Conferência de Mulheres em Bioinformática e Ciência de Dados LA";
    pAbout.innerHTML = "O Congresso Latino-Americano de Mulheres em Bioinformática e Ciência de Dados é um evento gratuito aberto a toda a comunidade, que reúne profissionais, estudantes, acadêmicas, empresárias, funcionárias públicas e amadoras. O principal objetivo do encontro é divulgar e dar visibilidade à pesquisa desenvolvida por mulheres e dissidentes da área de Bioinformática e Ciência de Dados. Este congresso foca nas áreas de biologia de sistemas, tecnologias ômicas, inteligência artificial, aprendizado de máquina, ciência de dados, mineração de dados e computação de alto desempenho com aplicações biológicas nos setores público e privado.";
    ConductText.innerHTML = "Código de Conduta";
    h2Title.innerHTML = "CONGRESSO VIRTUAL GRATUITO";
    h3Title.innerHTML = "de 22 a 24 de SETEMBRO de 2021";
    workshopButton.text('Cursos');
    datesbutton.text('Datas Importantes');
    posterButton.text('Sessão de Pôsteres');
    h2dates.innerHTML = "Datas Importantes";
    thdates.innerHTML = "Envio de Resumos para Palestras e Pôsteres";
    open1.innerHTML = "Abertura da Chamada para Resumo";
    open2.innerHTML = "15 de abril de 2021";
    close1.innerHTML = "Encerramento da Chamada para Resumo";
    close2.innerHTML = "1º de julho de 2021";
    notify1.innerHTML = "Notificação de Aceitação de Pôster";
    notify2.innerHTML = "30 de julho de 2021";
    h2Sponsors.innerHTML = "Apoiam este evento";
    h4Contact.innerHTML = "Contate-nos por e-mail:";
    h4Media.innerHTML = "Nos siga nas redes sociais:";
}

function renderSpanish() {
    registrationButton.text('Registrarse');
    speakersButton.text('Oradoras');
    sponsorsButton.text('Patrocinadores');
    committeeButton.text('Organizadoras');
    h1About.innerHTML = "2do Congreso de Mujeres en Bioinformática y Ciencia de Datos LA";
    pAbout.innerHTML = "El Congreso Latinoamericano de Mujeres en Bioinformática y Ciencia de Datos es un evento gratuito abierto a toda la comunidad, que reúne a profesionales, estudiantes, académicas, empresárias, funcionarias y amateurs. El objetivo principal del encuentro es dar a conocer y dar visibilidad a la investigación que realizan mujeres y disidentes en el área de Bioinformática y Ciencia de Datos. Este congreso se centra en las áreas de biología de sistemas, tecnologías ómicas, inteligencia artificial, aprendizaje automático, ciencia de datos, minería de datos y Rendimiento informático de alto nivel con aplicaciones biológicas en el sector público y privado. ";
    ConductText.innerHTML = "Código de conducta";
    h2Title.innerHTML = "CONGRESO VIRTUAL GRATIS";
    h3Title.innerHTML = "22-24 de SEPTIEMBRE de 2021";
    workshopButton.text('Cursos');
    datesbutton.text('Fechas importantes');
    posterButton.text('Sesión de Póster');
    h2dates.innerHTML = "Fechas importantes";
    thdates.innerHTML = "Envío de resúmenes para conferencias y carteles";
    open1.innerHTML = "Apertura de la Convocatoria de Resumen";
    open2.innerHTML = "15 de abril de 2021";
    close1.innerHTML = "Convocatoria de Cierre para Resumen";
    close2.innerHTML = "1 de julio de 2021";
    notify1.innerHTML = "Notificación de Aceptación de Póster";
    notify2.innerHTML = "30 de julio de 2021";
    h2Sponsors.innerHTML = "Apoya este evento";
    h4Contact.innerHTML = "Contáctenos por correo electrónico:";
    h4Media.innerHTML = "Síganos en las redes sociales:";
}

cross.addEventListener("click", () => {
    disableElement(cross);
    enableElement(ham);
    disableElement(navOptions);
});


ham.addEventListener("click", () => {
    disableElement(ham);
    enableElement(cross);
    enableElement(navOptions);
});

codeButton.addEventListener("click", () => {
    cleanBody();
    renderCodeCon();
})


speakersButton.on('click', () => {
    cleanBody();
    renderSpeakersBios();
})


posterButton.on('click', () => {
    event.preventDefault()
    cleanBody();
    renderPosterSessionSection();
})

committeeButton.on('click', () => {
    event.preventDefault()
    cleanBody();
    renderCommitteesSection();
})

sponsorsButton.on('click', () => {
    cleanBody();
    renderSponsorshipSection();
})

registrationButton.on('click', () => {
    cleanBody();
    renderRegistrationSection();
})


datesbutton.on('click', () => {
    event.preventDefault()
    datesSection.toggleClass('disable');

})

workshopButton.on('click', () => {
    event.preventDefault()
})

spanishButton.addEventListener('click', () => {
    renderSpanish();
});

portugueseButton.addEventListener('click', () => {
    renderPortuguese();
});