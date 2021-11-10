const conductSection = document.getElementById('conduct');
const $conductSection = $(document.getElementById('conduct'));
const conductButton2 = document.getElementById('conduct-button');

function renderconductSection() {
    $conductSection.empty();
    const introDiv = document.createElement('div');
    const securityDiv = document.createElement('div');
    const consequenceDiv = document.createElement('div');
    const unexpectedDiv = document.createElement('div');
    const reportDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    const h4Security = document.createElement('h4');
    const h4Unexpected = document.createElement('h4');
    const h4Consequence = document.createElement('h4');
    const h4Report = document.createElement('h4');
    const pSecurity = document.createElement('p');
    const pUnexpected = document.createElement('p');
    const pConsequence = document.createElement('p');
    const pReport = document.createElement('p');
    const pIntro = document.createElement('p');

    h2.innerHTML = "Code of Conduct";
    h2.id= "code-title";

    pIntro.innerHTML = 'Women in Bioinformatics and Data Science LA is a community congress intended for networking and collaboration in the scientific community. We value the participation of each member of this community and want all attendees to have an enjoyable and fulfilling experience. We are dedicated to providing a respectful, harassment-free community for everyone. We do not tolerate harassment or bullying of any community member in any form. This does not only extend to members to local Women in Bioinformatics and Data Science LA communities but to anyone who chooses to become involved in the larger Women in Bioinformatics and Data Science LA community of scientists, users, developers, and integrators through events or interactions. Therefore, we have created this code of conduct that all participants are expected to read and adhere to.';
    pIntro.id= "code-intro";

    h4Security.innerHTML = "Security and expected behaviour during virtual events and workshops";
    h4Security.id = "code-security-h4";

    pSecurity.innerHTML = 'Participants should be logged in the virtual conference using their full names. Any participant without appropriate identification and not registered will be removed from the session. If you need guidance on how to change your name in the conference ask one of the organizers and they will help you. Participants are expected to participate in an active and authentic way through a kind, considerate and respectful dialogue, thus contributing to the continuity of the community. Also, to be aware of their environment and the rest of the people who participate and notify the organization in case you observe any situation that is dangerous or that violates this Code of Conduct, even if it seems to have no consequences.';
    pSecurity.id = "code-security-p";

    h4Unexpected.innerHTML = "Unexpected behaviour and forms of harassment and discrimination";
    h4Unexpected.id = "code-unexpected-h4";

    pUnexpected.innerHTML = "Will be considered as unacceptable behavior: Offensive comments, such as those related to gender, gender identity, gender expression, sexual orientation, physical abilities, mental health, physical appearance, ethnicity or religion. Unwanted comments about a person's lifestyle choices or practices, including those related to food, health, work, parenting, or drug use. Intentional and incorrect use of chosen pronouns or name when referring to a person. Sexual images or comments in public or online spaces, deliberate intimidation, bullying, stalking, following, harassing photography or recording, sustained disruption of talks, IRC chats, electronic meetings, physical meetings or other events, inappropriate physical contact, or unwelcome sexual attention; private communication that does not stop when requested. Other forms of harassment and discriminatory behavior include, but are not limited to: offensive verbal comments related to gender, gender identity and expression, sexual orientation, ability, physical appearance, body size, race, ethnicity, religion, socioeconomic status, caste or creed and are considered unacceptable. If any of these behaviors is detected or reported, participants will be asked to stop and to comply immediately.";
    pUnexpected.id = "code-unexpected-p";

    h4Consequence.innerHTML = "Consequences for Harassment and Discrimination";
    h4Consequence.id = "code-consequence-h4";

    pConsequence.innerHTML = "If a participant engages in harassing behavior, representatives of the community may take reasonable action they deem appropriate, including warning the offender, expulsion from any Women in Bioinformatics and Data Science LA event, or expulsion from mailing lists, IRC chats, discussion boards and other electronic communications channels to resolve the issue. This may include expulsion from Women in Bioinformatics and Data Science LA conference.";
    pConsequence.id = "code-consequence-p";

    h4Report.innerHTML = "How to Report Harassment and Discrimination";
    h4Report.id = "code-report-h4";

    pReport.innerHTML = 'If you are being harassed, notice that someone else is being harassed, or have any other concerns, please act to intercede or ask for help from any member of the Women in Bioinformatics and Data Science LA community, IRC chat admins, website admins, or organizers/representatives of any physical events put on under the auspices of Women in Bioinformatics and Data Science LA. We encourage you to report any incident of harassment, discrimination, or unacceptable behavior as soon as possible. The Women in Bioinformatics and Data Science LA leadership team will take great care to ensure that the assistance provided meets the needs of attendees who were affected.';
    pReport.id = "code-report-p";

    introDiv.appendChild(h2);
    introDiv.appendChild(pIntro);

    securityDiv.appendChild(h4Security);
    securityDiv.appendChild(pSecurity);

    unexpectedDiv.appendChild(h4Unexpected);
    unexpectedDiv.appendChild(pUnexpected);

    consequenceDiv.appendChild(h4Consequence);
    consequenceDiv.appendChild(pConsequence);

    reportDiv.appendChild(h4Report);
    reportDiv.appendChild(pReport);

    conductSection.appendChild(introDiv);
    conductSection.appendChild(securityDiv);
    conductSection.appendChild(unexpectedDiv);
    conductSection.appendChild(consequenceDiv);
    conductSection.appendChild(reportDiv);
}


conductButton2.addEventListener('click', () => {
    enableElement(conductSection);
    renderconductSection();
    codeLangSetting();
    active(conductButton2);
});


function renderPortugueseConductPage() {
    const h2 = document.getElementById('code-title');
    h2.innerHTML = "Código de Conduta";

    const pIntro = document.getElementById('code-intro');
    pIntro.innerHTML = "Mulheres na Bioinformática e Ciência de Dados LA é uma comunidade que busca criar redes colaborativas entre profissionais da América Latina. Valorizamos a participação de cada integrante desta comunidade e queremos que cada participante tenha uma experiência agradável e satisfatória em nossos eventos. Por isso, buscamos garantir espaços de respeito e livres de assédio. Não toleramos assédio ou intimidação de qualquer integrante da comunidade de forma alguma. Isso não se estende apenas a integrantes de nossa comunidade, mas a qualquer pessoa que opte por se envolver em atividades comunitárias. Portanto, criamos este código de conduta que todas as pessoas participantes devem ler e aderir.";

    const h4Security = document.getElementById('code-security-h4');
    h4Security.innerHTML = "Segurança e comportamento esperado durante eventos e workshops virtuais";

    const pSecurity = document.getElementById('code-security-p');
    pSecurity.innerHTML = "Participantes devem entrar na conferência virtual com seus nomes completos. Qualquer participante sem a devida identificação e/ou sem cadastro será retirade da sessão. Se precisar de orientação sobre como mudar seu nome na conferência, pergunte a uma das organizadoras e elas lhe ajudarão. Espera-se que participantes tenham uma participação ativa e autêntica por meio de um diálogo amável, atencioso e respeitoso, contribuindo assim para a continuidade da comunidade. Da mesma forma, se atente ao seu ambiente e às demais pessoas que participam para notificar à organização caso observe alguma situação que seja perigosa ou que viole este Código de Conduta. Mesmo quando parecer não ter consequências.";

    const h4Unexpected = document.getElementById('code-unexpected-h4');
    h4Unexpected.innerHTML = "Comportamento inesperado e formas de assédio e discriminação";

    const pUnexpected = document.getElementById('code-unexpected-p');
    pUnexpected.innerHTML = "Serão considerados comportamentos inaceitáveis: comentários ofensivos, como aqueles relacionados a gênero, identidade de gênero, expressão de gênero, orientação sexual, habilidades físicas, saúde mental, aparência física, etnia ou religião. Comentários indesejados sobre as escolhas ou práticas de estilo de vida de uma pessoa, incluindo aqueles relacionados à alimentação, saúde, trabalho, paternidade ou uso de drogas. Uso intencional e incorreto de pronomes ou nomes escolhidos ao se referir a uma pessoa. Imagens ou comentários sexuais em espaços públicos ou online, intimidação deliberada, assédio, perseguição, rastreamento, assédio de fotografias ou gravações, interrupção sustentada de conversas, chats IRC, reuniões eletrônicas, reuniões físicas ou outros eventos, contato físico impróprio ou atenção sexual indesejada; comunicação privada que não para quando solicitada. Outras formas de assédio e comportamento discriminatório incluem, mas não estão limitados a: comentários verbais ofensivos relacionados a gênero, identidade e expressão de gênero, orientação sexual, habilidade, aparência física, tamanho corporal, raça, etnia, religião, status socioeconômico, casta ou credo e são considerados inaceitáveis. Se algum desses comportamentos for detectado ou relatado, participantes serão solicitados a parar e obedecer imediatamente.";

    const h4Consequence = document.getElementById('code-consequence-h4');
    h4Consequence.innerHTML = "Consequências de assédio e discriminação";

    const pConsequence = document.getElementById('code-consequence-p');
    pConsequence.innerHTML = "Se une participante se envolver em comportamento de assédio, as representantes da comunidade podem tomar medidas razoáveis ​​que considerem adequadas, incluindo advertir quem cometeu a infração, expulsar de qualquer evento da Mulheres na Bioinformática e Ciência de Dados LA ou expulsar de listas de e-mails, bate-papos IRC, fóruns de discussão e outras comunicações eletrônicas para resolver o problema. Isso também pode incluir a expulsão da conferência Mulheres na Bioinformática e Ciência de Dados LA.";

    const h4Report = document.getElementById('code-report-h4');
    h4Report.innerHTML = "Como denunciar assédio e discriminação";

    const pReport = document.getElementById('code-report-p');
    pReport.innerHTML = "Se você estiver sofrendo assédio, observar que alguém está sofrendo assédio ou tem qualquer outra preocupação, interceda ou peça ajuda a qualquer membra da comunidade de Mulheres na Bioinformática e Ciência de Dados LA, administradoras de bate-papo IRC ou representantes da Mulheres na Bioinformática e Dados de Ciência LA. Recomendamos que você relate quaisquer incidente de assédio, discriminação ou comportamento inaceitável o mais rápido possível. A equipe da Mulheres na Bioinformática e Dados de Ciência LA garantirá que a assistência prestada atenda às necessidades de cada participante afetade.";

}

function renderSpanishConductPage() {
    const h2 = document.getElementById('code-title');
    h2.innerHTML = "Código de Conducta";

    const pIntro = document.getElementById('code-intro');
    pIntro.innerHTML = "Mujeres en Bioinformática y Ciencia de Datos LA es una comunidad que busca crear redes de colaboración entre profesionales de America Latina. Valoramos la participación de cada miembro de esta comunidad y queremos que todos los asistentes tengan una experiencia agradable y satisfactoria en nuestros eventos. Es por ello que buscamos garantizar espacios respetuosos y libre de acoso. No toleramos el acoso o la intimidación de ningún miembre de la comunidad de ninguna forma. Esto no solo se extiende a les miembres de nuestra comunidad, sino a cualquier persona que elija involucrarse en las actividades de la comunidad. Por lo tanto, hemos creado este código de conducta que se espera que todes les participantes lean y cumplan.";

    const h4Security = document.getElementById('code-security-h4');
    h4Security.innerHTML = "Seguridad y comportamiento esperado durante eventos y talleres virtuales";

    const pSecurity = document.getElementById('code-security-p');
    pSecurity.innerHTML = "Les participantes deben iniciar sesión en la conferencia virtual con sus nombres completos. Cualquier participante sin la identificación adecuada y/o no registrado será eliminade de la sesión. Si necesita orientación sobre cómo cambiar su nombre en la conferencia, pregunte a una de las organizadoras y ellas le ayudarán. Se espera que les participantes tengan una participación activa y auténtica a través de un diálogo amable, considerado y respetuoso, contribuyendo así a la continuidad de la comunidad. Asimismo, estar atente a su entorno y al resto de las personas que participan para avisar a la organización en caso de observar alguna situación que sea peligrosa o que viole este Código de Conducta. Aún cuando esta parezca no tener consecuencias.";

    const h4Unexpected = document.getElementById('code-unexpected-h4');
    h4Unexpected.innerHTML = "Comportamiento inesperado y formas de acoso y discriminación.";

    const pUnexpected = document.getElementById('code-unexpected-p');
    pUnexpected.innerHTML = "Se considerarán comportamientos inaceptables: Los comentarios ofensivos, como los relacionados con género, identidad de género, expresión de género, orientación sexual, habilidades físicas, salud mental, apariencia física, etnia o religión. Comentarios no deseados sobre las elecciones o prácticas de estilo de vida de una persona, incluidos los relacionados con la alimentación, la salud, el trabajo, la crianza de los hijos o el uso de drogas. Uso intencional e incorrecto de pronombres o nombres elegidos al referirse a una persona. Imágenes o comentarios sexuales en espacios públicos o en línea, intimidación deliberada, acoso, acecho, seguimiento, hostigamiento de fotografías o grabaciones, interrupción sostenida de conversaciones, chats de IRC, reuniones electrónicas, reuniones físicas u otros eventos, contacto físico inapropiado o atención sexual no deseada; comunicación privada que no cesa cuando se solicita. Otras formas de acoso y comportamiento discriminatorio incluyen, entre otras: comentarios verbales ofensivos relacionados con el género, la identidad y expresión de género, la orientación sexual, la capacidad, la apariencia física, el tamaño del cuerpo, la raza, la etnia, la religión, el nivel socioeconómico, la casta o el credo y se consideran inaceptables. Si se detecta o informa alguno de estos comportamientos, se pedirá a les participantes que se detengan y cumplan de inmediato.";

    const h4Consequence = document.getElementById('code-consequence-h4');
    h4Consequence.innerHTML = "Consecuencias del acoso y la discriminación";

    const pConsequence = document.getElementById('code-consequence-p');
    pConsequence.innerHTML = "Si une participante se involucra en un comportamiento de acoso, los representantes de la comunidad pueden tomar las medidas razonables que consideren apropiadas, incluida la advertencia al ofensor, la expulsión de cualquier evento de Mujeres en Bioinformática y Ciencia de Datos LA, o la expulsión de listas de correo, chats de IRC, foros de discusión y otros Canales de comunicaciones electrónicas para resolver el problema. Esto puede incluir también  la expulsión de la conferencia Mujeres en Bioinformática y Ciencia de Datos LA.";

    const h4Report = document.getElementById('code-report-h4');
    h4Report.innerHTML = "Cómo denunciar el acoso y la discriminación";

    const pReport = document.getElementById('code-report-p');
    pReport.innerHTML = "Si está siendo acosade, nota que otra persona está siendo acosada o tiene cualquier otra inquietud, interceda o solicite ayuda a cualquier miembre de la comunidad de Mujeres en Bioinformática y Ciencia de Datos LA, administradores de chat IRC o representantes de Mujeres en Bioinformática y Ciencia de Datos LA. Le recomendamos que informe de cualquier incidente de acoso, discriminación o comportamiento inaceptable lo antes posible. El equipo de Mujeres en Bioinformática y Ciencia de Datos LA se encargará de garantizar que la asistencia brindada satisfaga las necesidades de los asistentes que se vieron afectados.";

}

window.onload = function() {
    renderconductSection()
    if(localStorage.getItem("Lang") === "ES"){
        renderSpanishNavBar();
        renderSpanishConductPage();
    } else if (localStorage.getItem("Lang") === "PT"){
        renderPortugueseNavBar();
        renderPortugueseConductPage();        
    }   
}

spanishButton.addEventListener('click', () => {
    languageCheck("ES");
    renderSpanishNavBar();
    renderSpanishConductPage();
});

portugueseButton.addEventListener('click', () => {
    languageCheck("PT");
    renderPortugueseNavBar();
    renderPortugueseConductPage();
});

